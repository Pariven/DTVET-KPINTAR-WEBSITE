import { cookies } from 'next/headers';
import { verify, sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';

export function setAuthCookie(token: string) {
  cookies().set({
    name: 'auth-token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 // 24 hours
  });
}

export function getAuthToken() {
  return cookies().get('auth-token')?.value;
}

export function generateToken(payload: any) {
  return sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string) {
  try {
    return verify(token, JWT_SECRET);
  } catch (error) {
    // Safe error handling without instanceof check
    const errorMessage = error && typeof error === 'object' && 'message' in error 
      ? (error as any).message 
      : String(error);
      
    console.log('🔐 Token verification failed:', {
      error: errorMessage,
      tokenLength: token?.length || 0
    });
    return null;
  }
}
