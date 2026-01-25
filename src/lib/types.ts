// Type definitions for the Olympic Learning Platform

/**
 * Represents a user in the system.
 * Users can be either students ('elev') or teachers ('profesor').
 */
export interface User {
  id: string;
  nume: string;
  email: string;
  rol: 'elev' | 'profesor';
}

/**
 * Represents a course created by a teacher.
 * Courses contain lessons and are accessible to students.
 */
export interface Course {
  id: string;
  titlu: string;
  descriere: string;
  creator_id: string;
}

/**
 * Represents a lesson within a course.
 * Lessons contain content and may have associated quizzes.
 */
export interface Lesson {
  id: string;
  course_id: string;
  titlu: string;
  continut: string;
}

/**
 * Represents a quiz question associated with a lesson.
 * Contains the question and the correct answer.
 */
export interface Quiz {
  id: string;
  lesson_id: string;
  intrebare: string;
  raspuns_corect: string;
}

/**
 * Represents the progress of a user on a specific lesson.
 * Tracks whether the lesson has been completed by the user.
 */
export interface Progress {
  user_id: string;
  lesson_id: string;
  completat: boolean;
}