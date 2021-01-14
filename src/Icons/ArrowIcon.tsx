import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ThemeContext } from '../common/theming/Theme';

import type { Direction } from '../types';

type Props = {
  direction?: Direction;
  disabled?: boolean;
  segments?: number;
  style?: StyleProp<ViewStyle>;
};

const pixelSize = 2;

const ArrowIcon = ({
  direction = 'bottom',
  disabled = false,
  segments = 4,
  style = {},
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

  const segmentSizes = new Array(segments).fill(null).map((_, i) => 1 + i * 2);

  if (['right', 'bottom'].includes(direction)) {
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
              backgroundColor: disabled
                ? theme.materialTextDisabled
                : theme.materialText,
              shadowColor: disabled
                ? theme.materialTextDisabledShadow
                : 'transparent',
              shadowOffset: {
                width: pixelSize,
                height: pixelSize,
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

export default ArrowIcon;
