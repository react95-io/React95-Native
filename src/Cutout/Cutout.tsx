import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { Border } from '../common/styleElements';

export const testId = 'cutout';

type Props = {
  children: React.ReactNode;
  // shadow?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Cutout = ({ children, style = {} }: Props) => {
  return (
    <View style={[styles.wrapper, style]} testID={testId}>
      <Border variant='cutout' />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // to compensate for borders
    position: 'relative',
    padding: 4,
  },
  content: {
    padding: 4,
  },
});

export default Cutout;
