import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Border } from '../common/styleElements';

type Props = {
  style?: Object;
  size?: string | number;
  // TODO: create orientation type since it's gonna be used in many places
  orientation?: 'horizontal' | 'vertical';
  // come up with a better name than 'raised'
  variant?: 'default' | 'raised';
};

const AppBar = ({
  variant = 'default',
  orientation = 'horizontal',
  size = '100%',
  style = {}
}: Props) => {
  const isHorizontal = orientation === 'horizontal';
  const isRaised = variant === 'raised';
  const thickness = isRaised ? 5 : 4;
  const sizing = {
    width: isHorizontal ? size : thickness,
    height: isHorizontal ? thickness : size
  };
  return (
    <View style={[styles.divider, sizing, style]}>
      <Border variant='well' invert={isRaised} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    position: 'relative'
  }
});

export default AppBar;
