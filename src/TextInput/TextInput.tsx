import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  ViewStyle,
} from 'react-native';

type Props = {
  value: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
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
