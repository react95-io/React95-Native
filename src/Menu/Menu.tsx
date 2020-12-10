import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { Panel } from '..';

import MenuItem from './MenuItem';

type MenuProps = {
  // TODO: should we handle 'anchor' and 'overlayAccessibilityLabel' prop?
  // see react-native-paper
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
  style?: StyleProp<ViewStyle>;
};

const Menu = ({
  children,
  orientation = 'vertical',
  style = {},
}: MenuProps) => {
  return (
    <Panel
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
