import React from 'react';
import { StyleSheet, View } from 'react-native';

import theme from '../common/themes';

type Props = {
  children: React.ReactNode;
  variant?: 'default' | 'well' | 'outside';
  style?: Object;
};

const Panel = ({ children, variant = 'default', style = {} }: Props) => {
  return (
    <View style={[styles.container, style, variantStyles[variant]]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.material
  }
});

const defaultVariantStyle = {
  borderStyle: 'solid',
  borderWidth: 2
};

const variantStyles = StyleSheet.create({
  default: {
    ...defaultVariantStyle,
    borderLeftColor: theme.borderLightest,
    borderTopColor: theme.borderLightest,
    borderRightColor: theme.borderDarkest,
    borderBottomColor: theme.borderDarkest
    /* toDo: implement shadow */
  },
  outside: {
    ...defaultVariantStyle,
    borderLeftColor: theme.borderLight,
    borderTopColor: theme.borderLight,
    borderRightColor: theme.borderDarkest,
    borderBottomColor: theme.borderDarkest
    /* toDo: implement shadow */
  },
  well: {
    ...defaultVariantStyle,
    borderLeftColor: theme.borderDark,
    borderTopColor: theme.borderDark,
    borderRightColor: theme.borderLightest,
    borderBottomColor: theme.borderLightest
  }
});

export default Panel;
