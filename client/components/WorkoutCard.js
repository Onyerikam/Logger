import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {deleteWorkout, updateWorkout} from '../actions/workouts';

// WorkoutCard component
const WorkoutCard = ({workout, dispatch}) => {
  const {exercise, sets, reps} = workout;
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.exercise}>{exercise}</Text>
        <Text style={styles.sets}>Sets: {sets}</Text>
        <Text style={styles.reps}>Reps: {reps}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => dispatch(updateWorkout(workout))}
          style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(deleteWorkout(workout._id))}
          style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  exercise: {
    fontSize: 20,
  },
  sets: {
    fontSize: 16,
    color: '#444',
  },
  reps: {
    fontSize: 16,
    color: '#444',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#444',
    fontSize: 16,
  },
});

export default WorkoutCard;
