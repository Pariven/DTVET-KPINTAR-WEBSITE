import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';

interface UseAuthRedirectOptions {
  redirectTo?: string;
  redirectDelay?: number;
  allowUnauthenticated?: boolean;
}

export const useAuthRedirect = (options: UseAuthRedirectOptions = {}) => {
  const {
    redirectTo = '/login',
    redirectDelay = 0,
    allowUnauthenticated = false
  } = options;

  const router = useRouter();
  const { token, user } = useAuthStore();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = () => {
      // Only run on client side
      if (typeof window === 'undefined') {
        setIsLoading(false);
        return;
      }

      // Check multiple sources for authentication
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      
      console.log('🔍 useAuthRedirect - Auth check:', {
        hasStoredToken: !!storedToken,
        hasStoredUser: !!storedUser,
        isLoggedIn,
        hasStoreToken: !!token,
        hasStoreUser: !!user
      });

      // Determine if user is authenticated
      const authenticated = !!(
        (storedToken && storedUser) ||
        (token && user) ||
        (storedToken && isLoggedIn)
      );

      setIsAuthenticated(authenticated);
      setIsLoading(false);

      // Handle redirection
      if (!authenticated && !allowUnauthenticated) {
        console.log('❌ Not authenticated, redirecting to:', redirectTo);
        
        if (redirectDelay > 0) {
          setTimeout(() => {
            router.push(`${redirectTo}?redirect=${encodeURIComponent(window.location.pathname)}`);
          }, redirectDelay);
        } else {
          router.push(`${redirectTo}?redirect=${encodeURIComponent(window.location.pathname)}`);
        }
      } else if (authenticated) {
        console.log('✅ Authenticated successfully');
      }
    };

    checkAuthentication();
  }, [token, user, router, redirectTo, redirectDelay, allowUnauthenticated]);

  return {
    isAuthenticated: isAuthenticated === true,
    isLoading,
    user: user || (typeof window !== 'undefined' && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null),
    token: token || (typeof window !== 'undefined' ? localStorage.getItem('token') : null)
  };
};

export default useAuthRedirect;
