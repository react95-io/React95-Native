import React from 'react';
import { StyleProp, StyleSheet, ViewStyle, View } from 'react-native';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const CardContent = ({ children, style = {} }: Props) => {
  return <View style={[styles.wrapper, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
  },
});

export default CardContent;
