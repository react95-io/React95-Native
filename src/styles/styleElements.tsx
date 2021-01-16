/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

import { withTheme } from '../core/theming';

import { buildBorderStyles } from './styles';
import type { Theme } from '../types';

// Borders acts like a pseudo element that
// will be positioned absolutely in it's parent element
type BorderProps = {
  invert?: boolean;
  variant?: 'default' | 'well' | 'raised' | 'cutout' | 'flat';
  style?: StyleProp<ViewStyle>;
  sharedStyle?: StyleProp<ViewStyle>;
  radius?: number;
  children?: React.ReactNode;
  theme: Theme;
};

const Border = ({
  invert = false,
  variant = 'default',
  style = {},
  sharedStyle = {},
  radius = 0,
  theme,
  children,
}: BorderProps) => {
  const wrapper: StyleProp<ViewStyle> = [];
  let outer;
  let inner;

  const themedBorders = buildBorderStyles(theme);

  if (variant === 'default') {
    outer = [themedBorders.defaultOuter];
    inner = [themedBorders.defaultInner];
  } else if (variant === 'raised') {
    outer = [themedBorders.outsideOuter];
    inner = [themedBorders.outsideInner];
  } else if (variant === 'well') {
    outer = [themedBorders.well, borderStyles.invert];
  } else if (variant === 'cutout') {
    outer = [themedBorders.cutoutOuter];
    inner = [themedBorders.cutoutInner];
  } else if (variant === 'flat') {
    outer = [themedBorders.flat];
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

const BorderWithTheme = withTheme(Border);
export { BorderWithTheme as Border };
