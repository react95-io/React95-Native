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

const ChevronIcon = ({
  direction = 'bottom',
  disabled = false,
  segments = 5,
  style = {},
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

  const segmentSizes = new Array(segments).fill(null).map((_, i) => 1 + i * 2);

  const isHorizontal = ['left', 'right'].includes(direction);

  const SegmentPixel = () => (
    <View
      style={{
        [isHorizontal ? 'width' : 'height']: pixelSize * 2,
        [isHorizontal ? 'height' : 'width']: pixelSize,
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
      }}
    />
  );

  const getFlexDirection = () => {
    switch (direction) {
      case 'left':
        return 'row';
      case 'top':
        return 'column';
      case 'right':
        return 'row-reverse';
      case 'bottom':
        return 'column-reverse';
      default:
        return 'row';
    }
  };

  return (
    <View
      style={[
        styles.wrapper,
        {
          flexDirection: getFlexDirection(),
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
          {i > 0 && <SegmentPixel />}
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

export default ChevronIcon;
