import { supabase } from './supabaseClient';
import type { Progress } from './types';
import type { RealtimeChannel } from '@supabase/supabase-js';

/**
 * Marks a lesson as completed or not for the current user.
 * If progress record doesn't exist, it creates one; otherwise, updates it.
 * @param lessonId - The ID of the lesson.
 * @param completed - Whether the lesson is completed (default: true).
 * @returns Promise resolving to the progress data or error.
 */
export const markLessonCompleted = async (lessonId: string, completed: boolean = true) => {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    return { data: null, error: userError || new Error('User not authenticated') };
  }

  const { data, error } = await supabase
    .from('progress')
    .upsert({
      user_id: user.id,
      lesson_id: lessonId,
      completat: completed,
    })
    .select()
    .single();

  return { data, error };
};

/**
 * Retrieves all progress records for a specific user.
 * @param userId - The ID of the user.
 * @returns Promise resolving to an array of progress records or error.
 */
export const getProgressForUser = async (userId: string) => {
  const { data, error } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', userId);

  return { data, error };
};

/**
 * Retrieves all progress records for a specific lesson.
 * Useful for teachers to see student progress on a lesson.
 * @param lessonId - The ID of the lesson.
 * @returns Promise resolving to an array of progress records or error.
 */
export const getProgressForLesson = async (lessonId: string) => {
  const { data, error } = await supabase
    .from('progress')
    .select('*')
    .eq('lesson_id', lessonId);

  return { data, error };
};

/**
 * Subscribes to real-time updates on the progress table.
 * Calls the callback function whenever progress data changes (insert, update, delete).
 * @param callback - Function to call with the change payload.
 * @returns The RealtimeChannel instance for unsubscribing.
 */
export const subscribeToProgressUpdates = (callback: (payload: any) => void): RealtimeChannel => {
  const channel = supabase
    .channel('progress-updates')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'progress',
      },
      callback
    )
    .subscribe();

  return channel;
};

/**
 * Unsubscribes from progress updates.
 * @param channel - The RealtimeChannel to unsubscribe from.
 */
export const unsubscribeFromProgressUpdates = (channel: RealtimeChannel) => {
  supabase.removeChannel(channel);
};