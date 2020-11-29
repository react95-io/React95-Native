import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { original as theme } from '../common/themes';

import { text, blockSizes } from '../common/styles';

import { Panel, Text } from '..';

type MenuProps = {
  // TODO: should we handle 'anchor' and 'overlayAccessibilityLabel' prop?
  // see react-native-paper
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
  style?: Object;
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

export type ItemSizes = 'sm' | 'md' | 'lg';

type ItemProps = {
  title: string;
  size?: ItemSizes;
  // TODO: create icon type and component for this lib
  // icon: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  style?: Object;
};

export const Item = ({
  title,
  size = 'md',
  disabled,
  style,
  onPress,
}: ItemProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      style={[
        styles.item,
        { height: blockSizes[size] },
        {
          backgroundColor: isPressed ? theme.hoverBackground : theme.material,
        },

        style,
      ]}
    >
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        disabled={disabled}
        onHideUnderlay={() => setIsPressed(false)}
        onShowUnderlay={() => setIsPressed(true)}
        underlayColor='none'
        // TODO: which accessibilityRole put in here?
        accessibilityRole='button'
      >
        <View pointerEvents='none' style={[styles.content]}>
          <Text
            style={[
              disabled ? text.disabled : text.default,
              !disabled && {
                color: isPressed
                  ? theme.materialTextInvert
                  : theme.materialText,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
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
  item: {
    position: 'relative',
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  content: {
    alignSelf: 'flex-start',
  },
});
Menu.Item = Item;
export default Menu;
