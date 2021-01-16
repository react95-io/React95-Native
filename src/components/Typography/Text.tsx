import React from 'react';
import { Text as NativeText, StyleProp, TextStyle } from 'react-native';

import { withTheme } from '../../core/theming';
import { builtTextStyles } from '../../styles/styles';
import type { Theme } from '../../types';

export type TextProps = React.ComponentProps<typeof NativeText> & {
  bold?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  secondary?: boolean;
  style?: StyleProp<TextStyle>;
  theme: Theme;
};

// TODO: set proper lineHeight and make it so that it automatically adjusts for every fontSize
const Text = ({
  bold = false,
  children,
  disabled = false,
  secondary = false,
  theme,
  style,
  ...rest
}: TextProps) => {
  const textStyles = builtTextStyles(theme);

  const getTextStyle = () => {
    if (disabled) {
      return textStyles.disabled;
    }

    if (secondary) {
      return textStyles.secondary;
    }

    return textStyles.default;
  };

  return (
    <NativeText
      style={[
        bold ? textStyles.bold : textStyles.regular,
        getTextStyle(),
        style,
      ]}
      {...rest}
    >
      {children}
    </NativeText>
  );
};

export default withTheme(Text);
