"use client";

import { useEffect } from 'react';
import { useAuthStore } from '@/lib/store';
import { useRouter, usePathname } from 'next/navigation';

const publicRoutes = ['/', '/login', '/contact', '/forgot-password', '/reset-password'];

// Function to check if a route is public
const isPublicRoute = (pathname: string) => {
  // Allow all certification pages (browsing)
  if (pathname.startsWith('/certifications')) {
    return true;
  }
  // Check exact matches
  return publicRoutes.includes(pathname);
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleNavigation = async () => {
      if (!token && !isPublicRoute(pathname)) {
        router.push('/login');
      }
    };

    handleNavigation();
  }, [token, pathname, router]);

  // Add token to all requests
  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      // Try to get token from either store or cookie
      const tokenToUse = token || document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      
      if (tokenToUse) {
        console.log('Adding token to request:', input);
        init = {
          ...init,
          headers: {
            ...init?.headers,
            Authorization: `Bearer ${tokenToUse}`,
          },
        };
      } else {
        console.log('No token available for request:', input);
      }
      
      try {
        const response = await originalFetch(input, init);
        if (response.status === 401 && !isPublicRoute(pathname)) {
          console.log('Unauthorized request, redirecting to login');
          router.push('/login');
        }
        return response;
      } catch (error) {
        console.error('Request failed:', error);
        if (!isPublicRoute(pathname)) {
          router.push('/login');
        }
        throw error;
      }
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, [token, pathname, router]);

  return <>{children}</>;
}
