/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { border } from './styles';

// Borders acts like a pseudo element that
// will be positioned absolutely in it's parent element

type BorderProps = {
  invert?: boolean;
  variant?: 'default' | 'well' | 'outside' | 'cutout';
};

export const Border = ({
  invert = false,
  variant = 'default',
}: BorderProps) => {
  const wrapper = [];
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

  const sharedStyles = [borderStyles.position];
  return (
    <View style={[sharedStyles, invert ? borderStyles.invert : {}, ...wrapper]}>
      {outer && (
        <View style={[sharedStyles, ...outer]}>
          {inner && <View style={[sharedStyles, ...inner]} />}
        </View>
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
