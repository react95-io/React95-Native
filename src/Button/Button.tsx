import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 48
  }
});

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

export default Button;
