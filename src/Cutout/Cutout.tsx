import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { Border } from '../common/styleElements';

import { ScrollView } from '..';

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
      <ScrollView>
        <View style={[styles.content]}>{children}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 100,
    // to compensate for borders
    padding: 4,
  },
  content: {
    padding: 4,
  },
});

export default Cutout;
