import { supabase } from './supabaseClient';
import type { Course } from './types';

/**
 * Creates a new course. Only teachers can create courses.
 * The creator_id is automatically set to the current authenticated user's ID.
 * @param courseData - The course data excluding id and creator_id.
 * @returns Promise resolving to the created course data or error.
 */
export const createCourse = async (courseData: Omit<Course, 'id' | 'creator_id'>) => {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    return { data: null, error: userError || new Error('User not authenticated') };
  }

  const { data, error } = await supabase
    .from('courses')
    .insert({
      ...courseData,
      creator_id: user.id,
    })
    .select()
    .single();

  return { data, error };
};

/**
 * Retrieves all courses. Accessible to all authenticated users.
 * @returns Promise resolving to an array of courses or error.
 */
export const getCourses = async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*');

  return { data, error };
};

/**
 * Retrieves courses created by a specific user. Useful for teachers to view their own courses.
 * @param creatorId - The ID of the course creator.
 * @returns Promise resolving to an array of courses or error.
 */
export const getCoursesByCreator = async (creatorId: string) => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('creator_id', creatorId);

  return { data, error };
};

/**
 * Updates an existing course. Only the creator (teacher) should be able to update their courses.
 * @param id - The ID of the course to update.
 * @param updates - The fields to update.
 * @returns Promise resolving to the updated course data or error.
 */
export const updateCourse = async (id: string, updates: Partial<Omit<Course, 'id'>>) => {
  const { data, error } = await supabase
    .from('courses')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  return { data, error };
};

/**
 * Deletes a course. Only the creator (teacher) should be able to delete their courses.
 * @param id - The ID of the course to delete.
 * @returns Promise resolving to the deleted course data or error.
 */
export const deleteCourse = async (id: string) => {
  const { data, error } = await supabase
    .from('courses')
    .delete()
    .eq('id', id)
    .select()
    .single();

  return { data, error };
};