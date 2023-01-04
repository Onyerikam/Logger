import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { updateUserInDB, getCurrentUserFromAsyncStorage } from '../utils/api';
import { yellow, black } from '../utils/colors';

function Settings({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      const user = await getCurrentUserFromAsyncStorage();
      setUsername(user.username);
    };
    getData();
  }, []);

  const handleSubmit = async () => {
    const user = { username, password };
    const updatedUser = await updateUserInDB(user);
    if (updatedUser.error) {
      setError(updatedUser.error);
    } else {
      setError('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  error: {
    color: 'red',
    marginBottom: 15,
  },
});

export default Settings;
