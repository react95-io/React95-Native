import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import type { $RemoveChildren, Orientation, DimensionValue } from '../../types';

import { Border } from '../../styles/styleElements';

type Props = $RemoveChildren<typeof View> & {
  orientation?: Orientation;
  size?: DimensionValue;
  style?: StyleProp<ViewStyle>;
  // come up with a better name than 'raised'
  variant?: 'default' | 'raised';
};

const Divider = ({
  orientation = 'horizontal',
  size = '100%',
  style = {},
  variant = 'default',
  ...rest
}: Props) => {
  const isHorizontal = orientation === 'horizontal';
  const isRaised = variant === 'raised';
  const thickness = isRaised ? 5 : 4;
  const sizing: StyleProp<ViewStyle> = {
    width: isHorizontal ? size : thickness,
    height: isHorizontal ? thickness : size,
  };
  return (
    <View style={[styles.divider, sizing, style]} {...rest}>
      <Border variant='well' invert={isRaised} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    position: 'relative',
  },
});

export default Divider;
