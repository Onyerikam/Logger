import {
    ADD_WORKOUT,
    FETCH_WORKOUTS,
    UPDATE_WORKOUT,
    DELETE_WORKOUT,
  } from './types';
  
  // Add workout action creator
  export const addWorkout = (workout) => ({
    type: ADD_WORKOUT,
    payload: workout,
  });
  
  // Fetch workouts action creator
  export const fetchWorkouts = (date) => ({
    type: FETCH_WORKOUTS,
    payload: date,
  });
  
  // Update workout action creator
  export const updateWorkout = (workout) => ({
    type: UPDATE_WORKOUT,
    payload: workout,
  });
  
  // Delete workout action creator
  export const deleteWorkout = (workoutId) => ({
    type: DELETE_WORKOUT,
    payload: workoutId,
});
  