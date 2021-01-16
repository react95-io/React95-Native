import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { withTheme } from '../../core/theming';
import type { Direction, Color, Theme } from '../../types';

type Props = {
  color?: Color;
  direction?: Direction;
  disabled?: boolean;
  segments?: number;
  shadowOffset?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

const pixelSize = 2;

const ArrowIcon = ({
  color,
  direction = 'down',
  disabled = false,
  segments = 4,
  shadowOffset,
  style = {},
  theme,
  ...rest
}: Props) => {
  const segmentSizes = new Array(segments).fill(null).map((_, i) => 1 + i * 2);

  if (['right', 'down'].includes(direction)) {
    segmentSizes.reverse();
  }
  const isHorizontal = ['left', 'right'].includes(direction);

  return (
    <View
      style={[
        styles.wrapper,
        {
          flexDirection: isHorizontal ? 'row' : 'column',
        },
        style,
      ]}
      {...rest}
    >
      {segmentSizes.map((segmentSize, i) => (
        <View
          key={i}
          style={[
            styles.segment,
            {
              [isHorizontal ? 'height' : 'width']: pixelSize * segmentSize,
              [isHorizontal ? 'width' : 'height']: pixelSize,
              backgroundColor:
                color ||
                (disabled ? theme.materialTextDisabled : theme.materialText),
              shadowColor: disabled
                ? theme.materialTextDisabledShadow
                : 'transparent',
              shadowOffset: {
                width: shadowOffset || pixelSize,
                height: shadowOffset || pixelSize,
              },
              shadowOpacity: 1,
              shadowRadius: 0,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  segment: {
    height: pixelSize,
  },
});

export default withTheme(ArrowIcon);
