import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

// Add the routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/api/auth/login',
  '/api/auth/register',
  '/api/stripe/webhook',
  '/certifications',
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if the path is public
  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  // Check for token in cookies (server-side httpOnly cookie)
  const authToken = request.cookies.get('auth-token')?.value;
  const token = request.cookies.get('token')?.value;
  const authHeader = request.headers.get('Authorization')?.split(' ')[1];const finalToken = authToken || token || authHeader;

  if (!finalToken) {// Redirect to login instead of returning JSON error for page requests
    if (!path.startsWith('/api/')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return new NextResponse(
      JSON.stringify({ message: 'Authentication required' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    );
  }

  const decoded = verifyToken(finalToken);
  if (!decoded) {// Redirect to login for invalid tokens on page requests
    if (!path.startsWith('/api/')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return new NextResponse(
      JSON.stringify({ message: 'Invalid token' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    );
  }const requestHeaders = new Headers(request.headers);
  requestHeaders.set('user', JSON.stringify(decoded));

  // Continue to the protected route
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/checkout',
    '/api/cart/:path*',
    '/api/certifications/:path*',
    '/api/stripe/checkout/:path*',
    '/api/stripe/checkout-simple/:path*',
    '/api/payments/:path*',
    '/api/test-payment/:path*',
  ],
};
