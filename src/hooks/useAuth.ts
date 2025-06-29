import { useState, useEffect } from 'react';
import { supabase, auth } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setAuthState({
        user: session?.user ?? null,
        loading: false,
        error: null
      });
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setAuthState({
          user: session?.user ?? null,
          loading: false,
          error: null
        });
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const { data, error } = await auth.signIn(email, password);
      
      if (error) {
        setAuthState(prev => ({ 
          ...prev, 
          loading: false, 
          error: error.message 
        }));
        return { error: error.message };
      }
      
      return { data };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: errorMessage 
      }));
      return { error: errorMessage };
    }
  };

  const signUp = async (email: string, password: string, userData: any) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const { data, error } = await auth.signUp(email, password, userData);
      
      if (error) {
        setAuthState(prev => ({ 
          ...prev, 
          loading: false, 
          error: error.message 
        }));
        return { error: error.message };
      }
      
      return { data };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: errorMessage 
      }));
      return { error: errorMessage };
    }
  };

  const signOut = async () => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const { error } = await auth.signOut();
      
      if (error) {
        setAuthState(prev => ({ 
          ...prev, 
          loading: false, 
          error: error.message 
        }));
        return { error: error.message };
      }
      
      setAuthState({
        user: null,
        loading: false,
        error: null
      });
      
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: errorMessage 
      }));
      return { error: errorMessage };
    }
  };

  const resetPassword = async (email: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const { data, error } = await auth.resetPassword(email);
      
      if (error) {
        setAuthState(prev => ({ 
          ...prev, 
          loading: false, 
          error: error.message 
        }));
        return { error: error.message };
      }
      
      setAuthState(prev => ({ ...prev, loading: false }));
      return { data };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: errorMessage 
      }));
      return { error: errorMessage };
    }
  };

  const updatePassword = async (password: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const { data, error } = await auth.updatePassword(password);
      
      if (error) {
        setAuthState(prev => ({ 
          ...prev, 
          loading: false, 
          error: error.message 
        }));
        return { error: error.message };
      }
      
      setAuthState(prev => ({ ...prev, loading: false }));
      return { data };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setAuthState(prev => ({ 
        ...prev, 
        loading: false, 
        error: errorMessage 
      }));
      return { error: errorMessage };
    }
  };

  const clearError = () => {
    setAuthState(prev => ({ ...prev, error: null }));
  };

  return {
    user: authState.user,
    loading: authState.loading,
    error: authState.error,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
    clearError,
    // isAuthenticated hanya true jika user benar-benar login (ada session Supabase)
    isAuthenticated: !!authState.user
  };
}; 