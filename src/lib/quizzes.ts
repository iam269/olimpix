import { supabase } from './supabaseClient';
import type { Quiz } from './types';

/**
 * Creates a new quiz for a specific lesson. Only teachers can create quizzes.
 * @param quizData - The quiz data excluding id.
 * @returns Promise resolving to the created quiz data or error.
 */
export const createQuiz = async (quizData: Omit<Quiz, 'id'>) => {
  const { data, error } = await supabase
    .from('quizzes')
    .insert(quizData)
    .select()
    .single();

  return { data, error };
};

/**
 * Retrieves all quizzes for a specific lesson. Accessible to all authenticated users.
 * @param lessonId - The ID of the lesson to get quizzes for.
 * @returns Promise resolving to an array of quizzes or error.
 */
export const getQuizzesByLesson = async (lessonId: string) => {
  const { data, error } = await supabase
    .from('quizzes')
    .select('*')
    .eq('lesson_id', lessonId);

  return { data, error };
};

/**
 * Updates an existing quiz. Only teachers should be able to update quizzes in their lessons.
 * @param id - The ID of the quiz to update.
 * @param updates - The fields to update.
 * @returns Promise resolving to the updated quiz data or error.
 */
export const updateQuiz = async (id: string, updates: Partial<Omit<Quiz, 'id'>>) => {
  const { data, error } = await supabase
    .from('quizzes')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  return { data, error };
};

/**
 * Deletes a quiz. Only teachers should be able to delete quizzes in their lessons.
 * @param id - The ID of the quiz to delete.
 * @returns Promise resolving to the deleted quiz data or error.
 */
export const deleteQuiz = async (id: string) => {
  const { data, error } = await supabase
    .from('quizzes')
    .delete()
    .eq('id', id)
    .select()
    .single();

  return { data, error };
};