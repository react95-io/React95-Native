import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { withTheme } from '../../core/theming';

import type { Color, Direction, Theme } from '../../types';

type Props = {
  color?: Color;
  direction?: Direction;
  disabled?: boolean;
  segments?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

const pixelSize = 2;

const ChevronIcon = ({
  color,
  direction = 'down',
  disabled = false,
  segments = 5,
  style = {},
  theme,
  ...rest
}: Props) => {
  const baseColor = color || theme.materialText;
  let segmentSizes = new Array(segments).fill(null).map((_, i) => 1 + i * 2);

  if (['right', 'down'].includes(direction)) {
    segmentSizes = segmentSizes.reverse();
  }
  const isHorizontal = ['left', 'right'].includes(direction);

  const SegmentPixel = () => (
    <View
      style={{
        [isHorizontal ? 'width' : 'height']: pixelSize * 2,
        [isHorizontal ? 'height' : 'width']: pixelSize,
        backgroundColor: disabled ? theme.materialTextDisabled : baseColor,
        shadowColor: disabled
          ? theme.materialTextDisabledShadow
          : 'transparent',
        shadowOffset: {
          width: pixelSize,
          height: pixelSize,
        },
        shadowOpacity: 1,
        shadowRadius: 0,
      }}
    />
  );

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
            {
              [isHorizontal ? 'height' : 'width']: pixelSize * segmentSize,
              [isHorizontal ? 'width' : 'height']: pixelSize,
              flexDirection: isHorizontal ? 'column' : 'row',
              justifyContent: 'space-between',
            },
          ]}
        >
          {segmentSize !== 1 && <SegmentPixel />}
          <SegmentPixel />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignItems: 'center',
  },
});

export default withTheme(ChevronIcon);
