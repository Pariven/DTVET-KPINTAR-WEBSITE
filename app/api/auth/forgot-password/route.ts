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
    const body = await request.json();
    const { email } = forgotPasswordSchema.parse(body);

    // Find user in Neon DB
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: 'No user found with that email.' }, { status: 404 });
    }

    // Generate a reset token and expiry (1 hour)
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000);

    // Store token and expiry in user table (add fields if needed)
    // If your Prisma User model doesn't include resetToken/resetTokenExpiry yet,
    // either add them to schema.prisma and run a migration, or cast the data to `any`
    // to bypass the compile-time check while developing.
    await prisma.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry,
      } as any,
    });

    // Send email with reset link using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
    await resend.emails.send({
      from: 'Your Name <noreply@yourdomain.com>',
      to: user.email,
      subject: 'Reset your password',
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
    });

    return NextResponse.json({
      message: 'Password reset link sent to your email (if it exists in our system).',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
