import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { withTheme } from '../../core/theming';
import type {
  $RemoveChildren,
  Orientation,
  DimensionValue,
  Theme,
} from '../../types';

import { Border } from '../../styles/styleElements';

type Props = $RemoveChildren<typeof View> & {
  orientation?: Orientation;
  size?: DimensionValue;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  // come up with a better name than 'raised'
  variant?: 'default' | 'raised';
};

const Divider = ({
  orientation = 'horizontal',
  size = '100%',
  style = {},
  theme,
  variant = 'default',
  ...rest
}: Props) => {
  const isHorizontal = orientation === 'horizontal';
  const isRaised = variant === 'raised';
  const thickness = isRaised ? 5 : 4;
  const dynamicStyles: StyleProp<ViewStyle> = {
    width: isHorizontal ? size : thickness,
    height: isHorizontal ? thickness : size,
    backgroundColor: theme.material,
  };
  return (
    <View style={[styles.divider, dynamicStyles, style]} {...rest}>
      <Border variant='well' invert={isRaised} theme={theme} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    position: 'relative',
  },
});

export default withTheme(Divider);
