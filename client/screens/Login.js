import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { login, setCurrentUserInAsyncStorage} from '../utils/api';
import { yellow, black } from '../utils/colors';

function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const user = await login(username, password);
    if (user.error) {
      setError(user.error);
    } else {
      setError('');
      setCurrentUserInAsyncStorage(user);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
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
  
export default Login;
  