import React from 'react';
import { StyleSheet, View } from 'react-native';

import { original as theme } from '../common/themes';
import { border } from '../common/styles';

type Props = {
  children: React.ReactNode;
  style?: Object;
};

const AppBar = ({ children, style = {} }: Props) => {
  return (
    <View style={[styles.container, border.default, style]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.material,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default AppBar;
