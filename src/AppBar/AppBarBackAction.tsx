import * as React from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';

import { Button } from '..';
import { original as theme } from '../common/themes';

type Props = {
  disabled?: boolean;
  accessibilityLabel?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const AppBarBackAction = ({ accessibilityLabel = 'Back', ...rest }: Props) => (
  <Button
    square
    variant='menu'
    accessibilityLabel={accessibilityLabel}
    {...rest}
  >
    <View style={[styles.icon]} />
  </Button>
);

export default AppBarBackAction;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },

  icon: {
    position: 'relative',
    height: 13,
    width: 13,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: theme.materialText,
    transform: [
      {
        rotate: '-45deg',
      },
      { translateY: 4 },
    ],
  },
});
