import { supabase } from './supabaseClient';
import type { User } from './types';

/**
 * Signs in a user with email and password.
 * @param email - The user's email address.
 * @param password - The user's password.
 * @returns Promise resolving to AuthResponse containing user data or error.
 */
export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

/**
 * Signs up a new user with email, password, name, and role.
 * Uses Supabase's trigger to automatically create the user profile.
 * @param email - The user's email address.
 * @param password - The user's password.
 * @param nume - The user's name.
 * @param rol - The user's role ('elev' or 'profesor').
 * @returns Promise resolving to AuthResponse containing user data or error.
 */
export const signup = async (email: string, password: string, nume: string, rol: 'elev' | 'profesor') => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nume,
        rol,
      },
    },
  });

  if (authError) {
    return { data: null, error: authError };
  }

  return { data: authData, error: null };
};

/**
 * Signs out the current user.
 * @returns Promise resolving to AuthResponse.
 */
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

/**
 * Sends a password reset email to the specified email address.
 * @param email - The email address to send the reset link to.
 * @returns Promise resolving to AuthResponse.
 */
export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  return { error };
};

/**
 * Gets the current authenticated user session.
 * @returns Promise resolving to the current session or null.
 */
export const getCurrentUser = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();
  return { session, error };
};