/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

import { ThemeContext } from './theming/Theme';

// Borders acts like a pseudo element that
// will be positioned absolutely in it's parent element
type BorderProps = {
  invert?: boolean;
  variant?: 'default' | 'well' | 'raised' | 'cutout' | 'flat';
  style?: StyleProp<ViewStyle>;
  sharedStyle?: StyleProp<ViewStyle>;
  radius?: number;
  children?: React.ReactNode;
};

export const Border = ({
  invert = false,
  variant = 'default',
  style = {},
  sharedStyle = {},
  radius = 0,
  children,
}: BorderProps) => {
  const theme = useContext(ThemeContext);

  const wrapper: StyleProp<ViewStyle> = [];
  let outer;
  let inner;

  if (variant === 'default') {
    outer = [theme.border.defaultOuter];
    inner = [theme.border.defaultInner];
  } else if (variant === 'raised') {
    outer = [theme.border.outsideOuter];
    inner = [theme.border.outsideInner];
  } else if (variant === 'well') {
    outer = [theme.border.well, borderStyles.invert];
  } else if (variant === 'cutout') {
    outer = [theme.border.cutoutOuter];
    inner = [theme.border.cutoutInner];
  } else if (variant === 'flat') {
    outer = [theme.border.flat];
  }

  const getSharedStyles = (() => {
    let r = radius + 4;

    return () => {
      r -= 2;
      return [
        borderStyles.position,
        sharedStyle,
        {
          borderRadius: radius ? r : 0,
        },
      ];
    };
  })();

  return (
    <View
      style={[
        getSharedStyles(),
        invert ? borderStyles.invert : {},
        ...wrapper,
        style,
      ]}
    >
      {outer ? (
        <View style={[getSharedStyles(), ...outer]}>
          {inner ? (
            <View style={[getSharedStyles(), ...inner]}>{children}</View>
          ) : (
            children
          )}
        </View>
      ) : (
        children
      )}
    </View>
  );
};

const borderStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  invert: {
    transform: [{ rotate: '180deg' }],
  },
});
