import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

import { original as theme } from '../common/themes';

type Props = {
  children: React.ReactNode;
  style?: Object;
};

const Text = ({ children, style = {} }: Props) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    color: theme.materialText
  }
});

export default Text;
