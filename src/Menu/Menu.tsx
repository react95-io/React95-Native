import React from 'react';
import { StyleProp, StyleSheet, ViewStyle, View } from 'react-native';
import type { LayoutChangeEvent } from 'react-native';
import type { Orientation } from '../types';

import { Panel } from '..';

import MenuItem from './MenuItem';

type Props = React.ComponentPropsWithRef<typeof View> & {
  anchor?: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  orientation?: Orientation;
  style?: StyleProp<ViewStyle>;
  horizontalAlignment?: 'left' | 'right';
  verticalAlignment?: 'above' | 'below';
};

const Menu = ({
  anchor,
  children,
  open = false,
  orientation = 'vertical',
  style = {},
  horizontalAlignment: horizontalAlign = 'left',
  verticalAlignment: verticalAlign = 'below',
  ...rest
}: Props) => {
  const [menuSize, setMenuSize] = React.useState({ width: 0, height: 0 });

  const handleMenuLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setMenuSize({ width, height });
  };

  const menuPosition: StyleProp<ViewStyle> = {};
  if (verticalAlign === 'below') {
    menuPosition.top = '100%';
  } else {
    menuPosition.top = -menuSize.height;
  }
  if (horizontalAlign === 'left') {
    menuPosition.left = 0;
  } else {
    menuPosition.right = menuSize.width;
  }

  return (
    <View style={styles.wrapper}>
      {anchor}

      {open && (
        <View style={[styles.menuWrapper, menuPosition]}>
          <Panel
            {...rest}
            variant='outside'
            onLayout={handleMenuLayout}
            style={[
              styles.menu,
              {
                display: 'flex',
                flexDirection: orientation === 'vertical' ? 'column' : 'row',
              },
              style,
            ]}
          >
            {children}
          </Panel>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  menuWrapper: {
    position: 'absolute',
  },
  menu: {
    width: 'auto',
    position: 'absolute',
    height: 'auto',
    flexGrow: 0,
    padding: 6,
  },
});

Menu.Item = MenuItem;

export default Menu;
