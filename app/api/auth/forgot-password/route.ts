import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import crypto from 'crypto';
import { Resend } from 'resend';

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    console.log('🔐 Forgot password request received');
    
    const body = await request.json();
    console.log('📧 Request body:', { email: body.email });
    
    const { email } = forgotPasswordSchema.parse(body);

    // Find user in Neon DB
    console.log('🔍 Looking for user with email:', email);
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.log('❌ No user found with email:', email);
      return NextResponse.json({ error: 'No user found with that email.' }, { status: 404 });
    }
    
    console.log('✅ User found:', { id: user.id, name: user.name, email: user.email });

    // Generate a reset token and expiry (1 hour)
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000);
    
    console.log('🔑 Generated reset token:', { tokenLength: resetToken.length, expiry: resetTokenExpiry });

    // Store token and expiry in user table
    await prisma.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry,
      } as any,
    });
    
    console.log('💾 Reset token saved to database');

    // Send email with reset link using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Use different base URL for local vs production
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.vercel.app'
      : 'http://localhost:3000';
      
    const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;
    
    console.log('📧 Preparing to send email with Resend API');
    console.log('📧 Environment:', process.env.NODE_ENV || 'development');
    console.log('📧 Base URL:', baseUrl);
    console.log('📧 Reset link:', resetLink);
    console.log('📧 Resend API Key available:', !!process.env.RESEND_API_KEY);
    
    try {
      const emailResult = await resend.emails.send({
        from: 'DTVET <noreply@digitaltvetmalaysia.com>', // Using your verified domain
        to: user.email,
        subject: 'Reset Your DTVET Password',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Reset Your DTVET Password</h2>
            <p>Hello ${user.name},</p>
            <p>You requested to reset your password for your DTVET account. Click the button below to reset your password:</p>
            <a href="${resetLink}" style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0;">Reset Password</a>
            <p>If the button doesn't work, copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #6b7280;">${resetLink}</p>
            <p>This link will expire in 1 hour for security reasons.</p>
            <p>If you didn't request this password reset, please ignore this email.</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">DTVET - Digital TVET Malaysia</p>
          </div>
        `
      });
      
      console.log('✅ Resend API response:', emailResult);
      console.log('✅ Password reset email sent successfully to:', user.email);
    } catch (emailError) {
      console.error('❌ Failed to send reset email:', emailError);
      console.error('❌ Email error details:', JSON.stringify(emailError, null, 2));
      
      // Return error for debugging (remove in production)
      return NextResponse.json({
        error: 'Failed to send email',
        details: emailError instanceof Error ? emailError.message : 'Unknown email error'
      }, { status: 500 });
    }

    return NextResponse.json({
      message: 'Password reset link sent to your email (if it exists in our system).',
    });
  } catch (error) {
    console.error('❌ Forgot password API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
