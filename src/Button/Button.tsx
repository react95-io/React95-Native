import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  style?: Object;
};

const Button = ({ children, onPress, style = {} }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48
  }
});

export default Button;
