import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import { original as theme } from '../common/themes';
import { text, blockSizes } from '../common/styles';

import { Text } from '..';

export type ItemSizes = 'sm' | 'md' | 'lg';

type Props = {
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
}: Props) => {
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

export default Item;
