import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import prisma from '@/lib/prisma';
import { generateToken, setAuthCookie } from '@/lib/auth';

export async function POST(request: Request) {
  console.log('🔐 Login API called:', {
    method: request.method,
    url: request.url,
    timestamp: new Date().toISOString()
  });
  
  try {
    const body = await request.json();
    const { email, password } = body;
    
    console.log('📧 Login request data:', {
      email: email ? `${email.substring(0, 3)}***` : 'missing',
      passwordProvided: !!password,
      passwordLength: password?.length || 0
    });

    // Find user by email
    console.log('🔍 Looking for user with email:', email ? `${email.substring(0, 3)}***` : 'undefined');
    
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      console.log('❌ User not found for email:', email ? `${email.substring(0, 3)}***` : 'undefined');
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    console.log('✅ User found:', {
      id: user.id,
      email: `${user.email.substring(0, 3)}***`,
      name: user.name,
      role: user.role
    });

    // Verify password
    console.log('🔑 Verifying password...');
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      console.log('❌ Password verification failed');
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    console.log('✅ Password verified successfully');

    // Generate JWT token
    console.log('🔗 Generating JWT token...');
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role
    });
    
    console.log('✅ Token generated successfully:', {
      tokenLength: token.length,
      userId: user.id
    });

    // Create the response
    const response = NextResponse.json(
      {
        user: {
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      },
      { status: 200 }
    );

    // Set the auth cookie on the response
    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    // Also set a non-httpOnly cookie for client-side access
    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    console.log('🎉 Login successful! Sending response with cookies.');
    return response;
  } catch (error) {
    console.error('💥 Login error:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json(
      { message: 'An error occurred during login.' },
      { status: 500 }
    );
  }
}
