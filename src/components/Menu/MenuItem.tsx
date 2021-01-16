import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
} from 'react-native';

import type { Theme, Sizes } from '../../types';
import { withTheme } from '../../core/theming';
import { blockSizes, builtTextStyles } from '../../styles/styles';

import { Text } from '../..';

// TODO: add icon prop

type Props = {
  disabled?: boolean;
  onPress: () => void;
  primary?: boolean;
  size?: Sizes;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  title: string;
};

export const Item = ({
  disabled,
  onPress,
  primary = false,
  size = 'md',
  style,
  theme,
  title,
  ...rest
}: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const textStyles = builtTextStyles(theme);
  return (
    <View
      {...rest}
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
        accessibilityRole='menuitem'
        accessibilityState={{ disabled }}
      >
        <View pointerEvents='none' style={[styles.content]}>
          <Text
            theme={theme}
            bold={primary}
            style={[
              disabled ? textStyles.disabled : textStyles.default,
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

export default withTheme(Item);
