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
  const authHeader = request.headers.get('Authorization')?.split(' ')[1];
  const finalToken = authToken || token || authHeader;

  // Debug logging for protected routes
  if (path === '/checkout' || path === '/cart' || path === '/dashboard' || path.startsWith('/dashboard/') || path.includes('/api/stripe/')) {
    console.log(`🔍 ${path} Middleware Debug:`, {
      path,
      hasAuthToken: !!authToken,
      hasToken: !!token,
      hasAuthHeader: !!authHeader,
      hasFinalToken: !!finalToken,
      authTokenValue: authToken ? `${authToken.substring(0, 20)}...` : 'none',
      tokenValue: token ? `${token.substring(0, 20)}...` : 'none',
      authHeaderValue: authHeader ? `${authHeader.substring(0, 20)}...` : 'none',
    });
  }

  if (!finalToken) {
    console.log(`❌ ${path} No authentication token found, redirecting to login`);
    // Redirect to login instead of returning JSON error for page requests
    if (!path.startsWith('/api/')) {
      const loginUrl = new URL('/login', request.url);
      // Save the current path for redirect after login
      loginUrl.searchParams.set('redirect', path);
      return NextResponse.redirect(loginUrl);
    }
    return new NextResponse(
      JSON.stringify({ message: 'Authentication required' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    );
  }

  const decoded = verifyToken(finalToken);
  if (!decoded) {
    console.log(`❌ ${path} Token verification failed:`, {
      tokenLength: finalToken.length,
      tokenStart: finalToken.substring(0, 50),
      hasJwtSecret: !!process.env.JWT_SECRET,
      jwtSecretLength: process.env.JWT_SECRET?.length || 0
    });
    // Redirect to login for invalid tokens on page requests
    if (!path.startsWith('/api/')) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', path);
      loginUrl.searchParams.set('reason', 'invalid_token');
      return NextResponse.redirect(loginUrl);
    }
    return new NextResponse(
      JSON.stringify({ message: 'Invalid token' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    );
  }
  
  console.log(`✅ ${path} Token verified successfully for user:`, decoded);const requestHeaders = new Headers(request.headers);
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
    '/dashboard', // Protect the main dashboard page
    '/checkout', // Protect checkout page to require authentication
    '/cart', // Protect cart page to require authentication
    '/api/cart/:path*',
    '/api/certifications/:path*',
    '/api/stripe/checkout/:path*',
    '/api/stripe/checkout-simple/:path*',
    '/api/payments/:path*',
    '/api/test-payment/:path*',
  ],
};
