import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { Border } from '../common/styleElements';

export const testId = 'cutout';

type Props = React.ComponentPropsWithRef<typeof View> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Cutout = ({ children, style = {}, ...rest }: Props) => {
  return (
    <View style={[styles.wrapper, style]} testID={testId} {...rest}>
      <Border variant='cutout' />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    // to compensate for borders
    padding: 4,
  },
});

export default Cutout;
