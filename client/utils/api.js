import AsyncStorage from '@react-native-community/async-storage';

const baseURL = 'http://localhost:5000';

export const signup = async (username, password) => {
  const response = await fetch(`${baseURL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  return data;
};

export const login = async (username, password) => {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  return data;
};

export const addUserToDB = async (user) => {
  const response = await fetch(`${baseURL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const addWorkoutToDB = async (workout) => {
  const response = await fetch(`${baseURL}/workouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workout),
  });
  const data = await response.json();
  return data;
};

export const updateUserInDB = async (user) => {
  const response = await fetch(`${baseURL}/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const setCurrentUserInAsyncStorage = async (user) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentUserFromAsyncStorage = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== null) {
        return JSON.parse(user);
      }
    } catch (error) {
      console.error(error);
    }
};
  
export const clearCurrentUserFromAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error(error);
    }
};