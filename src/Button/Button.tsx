import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 48
  }
});

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

const Button = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
