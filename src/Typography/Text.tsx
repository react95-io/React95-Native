import React, { useContext } from 'react';
import { Text as NativeText, StyleProp, TextStyle } from 'react-native';

import { ThemeContext } from '../common/theming/Theme';

export type TextProps = React.ComponentProps<typeof NativeText> & {
  bold?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  secondary?: boolean;
  style?: StyleProp<TextStyle>;
};

// TODO: set proper lineHeight and make it so that it automatically adjusts for every fontSize
const Text = ({
  bold = false,
  children,
  disabled = false,
  secondary = false,
  style,
  ...rest
}: TextProps) => {
  const theme = useContext(ThemeContext);
  const { text } = theme;

  const getTextStyle = () => {
    if (disabled) {
      return theme.text.disabled;
    }

    if (secondary) {
      return theme.text.secondary;
    }

    return theme.text.default;
  };

  return (
    <NativeText
      style={[bold ? text.bold : text.regular, getTextStyle(), style]}
      {...rest}
    >
      {children}
    </NativeText>
  );
};

export default Text;
