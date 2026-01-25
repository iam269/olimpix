import { supabase } from './supabaseClient';
import type { Lesson } from './types';

/**
 * Creates a new lesson for a specific course. Only teachers can create lessons.
 * @param lessonData - The lesson data excluding id.
 * @returns Promise resolving to the created lesson data or error.
 */
export const createLesson = async (lessonData: Omit<Lesson, 'id'>) => {
  const { data, error } = await supabase
    .from('lessons')
    .insert(lessonData)
    .select()
    .single();

  return { data, error };
};

/**
 * Retrieves all lessons for a specific course. Accessible to all authenticated users.
 * @param courseId - The ID of the course to get lessons for.
 * @returns Promise resolving to an array of lessons or error.
 */
export const getLessonsByCourse = async (courseId: string) => {
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('course_id', courseId);

  return { data, error };
};

/**
 * Retrieves a single lesson by ID.
 * @param id - The ID of the lesson to retrieve.
 * @returns Promise resolving to the lesson data or error.
 */
export const getLesson = async (id: string) => {
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('id', id)
    .single();

  return { data, error };
};

/**
 * Updates an existing lesson. Only teachers should be able to update lessons in their courses.
 * @param id - The ID of the lesson to update.
 * @param updates - The fields to update.
 * @returns Promise resolving to the updated lesson data or error.
 */
export const updateLesson = async (id: string, updates: Partial<Omit<Lesson, 'id'>>) => {
  const { data, error } = await supabase
    .from('lessons')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  return { data, error };
};

/**
 * Deletes a lesson. Only teachers should be able to delete lessons in their courses.
 * @param id - The ID of the lesson to delete.
 * @returns Promise resolving to the deleted lesson data or error.
 */
export const deleteLesson = async (id: string) => {
  const { data, error } = await supabase
    .from('lessons')
    .delete()
    .eq('id', id)
    .select()
    .single();

  return { data, error };
};