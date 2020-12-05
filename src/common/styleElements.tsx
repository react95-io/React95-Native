/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { border } from './styles';

// Borders acts like a pseudo element that
// will be positioned absolutely in it's parent element
type BorderProps = {
  invert?: boolean;
  variant?: 'default' | 'well' | 'outside' | 'cutout';
  style?: object;
  sharedStyle?: object;
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
  const wrapper: StyleProp<ViewStyle> = [];
  let outer;
  let inner;

  if (variant === 'default') {
    outer = [border.defaultOuter];
    inner = [border.defaultInner];
  } else if (variant === 'outside') {
    outer = [border.outsideOuter];
    inner = [border.outsideInner];
  } else if (variant === 'well') {
    outer = [border.well, borderStyles.invert];
  } else if (variant === 'cutout') {
    outer = [border.cutoutOuter];
    inner = [border.cutoutInner];
  }

  const getSharedStyles = (function () {
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
