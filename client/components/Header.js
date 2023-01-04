import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { black } from '../utils/colors';

function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    padding: 15,
  },
  title: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Header;
