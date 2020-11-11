import React from 'react';
import { StyleSheet, View } from 'react-native';

import { border, box } from '../common/styles';

type Props = {
  children: React.ReactNode;
  style?: Object;
};

const Window = ({ children, style = {} }: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    ...border.windowBorders,
    ...box.default
  }
});

export default Window;
