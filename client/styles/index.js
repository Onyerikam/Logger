import { StyleSheet } from 'react-native';
import { yellow, black } from '../utils/colors';

export const globalStyles = StyleSheet.create({
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
