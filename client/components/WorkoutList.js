import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { black } from '../utils/colors';

function WorkoutList({ workouts }) {
  return (
    <View style={styles.container}>
      {workouts.length > 0 ? (
        <FlatList
          data={workouts}
          renderItem={({ item }) => (
            <View style={styles.workoutContainer}>
              <Text style={styles.workoutText}>{item.name}</Text>
              <Text style={styles.workoutText}>{item.sets} sets</Text>
              <Text style={styles.workoutText}>{item.reps} reps</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>No workouts added yet</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  workoutContainer: {
    backgroundColor: 'lightgrey',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  workoutText: {
    fontSize: 18,
    color: black,
    marginBottom: 5,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: black,
  },
});

export default WorkoutList;
