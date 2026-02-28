import { useContext } from 'react';
import { AuthContext } from '@/contexts/auth-context';

/**
 * Custom hook to access the authentication context.
 * Must be used within an AuthProvider.
 * 
 * @throws Error if used outside of AuthProvider
 * @returns The authentication context value including user, session, loading state, and signOut function
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
