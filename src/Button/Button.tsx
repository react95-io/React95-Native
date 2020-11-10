import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

import { original as theme } from '../common/themes';
import { border, box } from '../common/styles';

export const testId = 'button';

export type ButtonSizes = 'sm' | 'md' | 'lg';

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  variant?: 'menu' | 'flat' | 'default';
  size?: ButtonSizes;
  style?: Object;
  disabled?: boolean;
  fullWidth?: boolean;
  square?: boolean;
};

const Button = ({
  children,
  onPress,
  variant = 'default',
  size = 'md',
  disabled = false,
  style = {},
  fullWidth = false,
  square = false
}: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const getWidth = () => {
    if (fullWidth) return '100%';

    return square ? blockSizes[size] : 'auto';
  };

  const getActiveStyle = () => {
    if (variant === 'menu') {
      return isPressed ? border.wellInverted : {};
    }

    if (variant === 'default') {
      return isPressed ? border.inverted : border.default;
    }

    return {};
  };

  return (
    <TouchableHighlight
      style={[
        styles.base,
        styles[variant],
        style,
        getActiveStyle(),
        { height: blockSizes[size] },
        { width: getWidth() },
        { paddingHorizontal: square ? 0 : 10 },
        { paddingTop: disabled ? 0 : 2 }
      ]}
      onPress={onPress}
      disabled={disabled}
      onHideUnderlay={() => setIsPressed(false)}
      onShowUnderlay={() => setIsPressed(true)}
      underlayColor={theme.material}
      testID={testId}
    >
      <Text>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 48,
    alignItems: 'center',
    flexDirection: 'row'
  },
  default: {
    backgroundColor: theme.material
  },
  menu: {
    backgroundColor: theme.material,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent'
  },
  flat: box.flat
});

export const blockSizes = {
  sm: 27,
  md: 35,
  lg: 43
};

export default Button;
