import {
  ADD_USER,
  ADD_WORKOUT,
  UPDATE_USER,
  SET_CURRENT_USER,
  SET_WORKOUTS,
  TOGGLE_MODAL,
} from './types';
  
export const addUser = (user) => ({
  type: ADD_USER,
  user,
});
  
export const addWorkout = (workout) => ({
  type: ADD_WORKOUT,
  workout,
});
  
export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});
  
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});
  
export const setWorkouts = (workouts) => ({
  type: SET_WORKOUTS,
  workouts,
});
  
export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});
  