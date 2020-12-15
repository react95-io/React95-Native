import React from 'react';
import { StyleProp, StyleSheet, ViewStyle, View } from 'react-native';
import type { OrientationProp } from '../types';

import { Panel } from '..';

import MenuItem from './MenuItem';

type Props = React.ComponentPropsWithRef<typeof View> & {
  // TODO: should we handle 'anchor' and 'overlayAccessibilityLabel' prop?
  // see react-native-paper
  children: React.ReactNode;
  orientation?: OrientationProp;
  style?: StyleProp<ViewStyle>;
};

const Menu = ({
  children,
  orientation = 'vertical',
  style = {},
  ...rest
}: Props) => {
  return (
    <Panel
      {...rest}
      variant='outside'
      style={[
        styles.wrapper,
        {
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
        },
        style,
      ]}
    >
      {children}
    </Panel>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: 'auto',
    flexGrow: 0,
    padding: 6,
    alignSelf: 'flex-start',
  },
});

Menu.Item = MenuItem;

export default Menu;
