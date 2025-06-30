import { createClient } from '@supabase/supabase-js';

// Ambil dari environment variable, fallback ke string kosong agar tidak pernah connect ke URL/anon key yang salah
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helper functions
type UserProfile = {
  full_name?: string;
  phone?: string;
  avatar_url?: string;
  role?: string;
};

export const auth = {
  // Sign up with email and password
  signUp: async (email: string, password: string, userData: UserProfile) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    return { data, error };
  },

  // Sign in with email and password
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Reset password
  resetPassword: async (email: string) => {
    // Deteksi environment: production (GitHub Pages) atau local
    let redirectTo = '';
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      redirectTo = 'http://localhost:5173/reset-password';
    } else {
      redirectTo = 'https://dinyatun.github.io/RSUD-Bima/reset-password';
    }
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo
    });
    return { data, error };
  },

  // Update password
  updatePassword: async (password: string) => {
    const { data, error } = await supabase.auth.updateUser({
      password
    });
    return { data, error };
  },

  // Get current user
  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },

  // Listen to auth changes
  onAuthStateChange: (callback: (event: string, session: unknown) => void) => {
    return supabase.auth.onAuthStateChange(callback);
  }
};

// Database helper functions
export const database = {
  // Insert user profile
  insertUserProfile: async (userId: string, profileData: UserProfile) => {
    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          id: userId,
          ...profileData
        }
      ]);
    return { data, error };
  },

  // Get user profile
  getUserProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    return { data, error };
  },

  // Update user profile
  updateUserProfile: async (userId: string, updates: UserProfile) => {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId);
    return { data, error };
  }
};

export default supabase; 