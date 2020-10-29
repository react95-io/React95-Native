import React from 'react';
import { StyleSheet, View } from 'react-native';

import { original as theme } from '../common/themes';
import { border } from '../common/styles';

type Props = {
  children: React.ReactNode;
  variant?: 'default' | 'well' | 'outside';
  style?: Object;
};

const Panel = ({ children, variant = 'default', style = {} }: Props) => {
  return (
    <View style={[styles.container, style, variantHash[variant]]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.material
  }
});

const variantHash = {
  outside: border.windowBorders,
  default: border.default,
  well: border.wellInverted
};

export default Panel;
