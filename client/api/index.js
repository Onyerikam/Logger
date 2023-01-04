import { AsyncStorage } from 'react-native';

export const addUserToDB = (username, password) =>
  fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => response.json());

export const addWorkoutToDB = (workout) =>
  fetch('http://localhost:5000/workouts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ workout }),
  }).then((response) => response.json());

export const updateUserInDB = (username, password) =>
  fetch('http://localhost:5000/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => response.json());

export const login = (username, password) =>
  fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => response.json());

export const signup = (username, password) =>
  fetch('http://localhost:5000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => response.json());

export const getWorkoutsFromDB = () =>
  fetch('http://localhost:5000/workouts').then((response) => response.json());

export const getUserFromDB = () =>
  fetch('http://localhost:5000/users').then((response) => response.json());

export const getCurrentUserFromAsyncStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentUserInAsyncStorage = async (user) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

export const removeCurrentUserFromAsyncStorage = async () => {
  try {
    await AsyncStorage.removeItem('user');
  } catch (error) {
    console.log(error);
  }
};
