import React from 'react';
import { StyleSheet, TextInput as RNTextInput } from 'react-native';

type Props = {
  value: string;
  placeholder?: string;
  style?: Object;
};

const TextInput = ({ value, placeholder = '', style = {} }: Props) => {
  return (
    <RNTextInput
      style={[styles.input, style]}
      value={value}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: '#fafafa',
  },
});

export default TextInput;
