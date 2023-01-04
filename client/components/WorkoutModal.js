import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { addWorkoutToDB } from '../utils/api';
import { yellow, black } from '../utils/colors';

function WorkoutModal({ isVisible, toggleModal }) {
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = async () => {
    const workout = { name, sets, reps };
    await addWorkoutToDB(workout);
    toggleModal();
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Workout</Text>
        <TextInput
          style={styles.input}
          placeholder="Workout Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Sets"
          keyboardType="number-pad"
          value={sets}
          onChangeText={setSets}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Reps"
          keyboardType="number-pad"
          value={reps}
          onChangeText={setReps}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: yellow,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: black,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default WorkoutModal;
