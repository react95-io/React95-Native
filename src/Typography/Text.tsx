import React, { useContext } from 'react';
import { Text as NativeText, StyleProp, TextStyle } from 'react-native';

import { ThemeContext } from '../common/theming/Theme';

export const fontNames = {
  normal: 'MS Sans Serif',
  bold: 'MS Sans Serif Bold',
};

type Props = React.ComponentProps<typeof NativeText> & {
  bold?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  secondary?: boolean;
  style?: StyleProp<TextStyle>;
};

const Text = ({
  bold = false,
  children,
  disabled = false,
  secondary = false,
  style,
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

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
      style={[
        getTextStyle(),
        {
          fontFamily: bold ? fontNames.bold : fontNames.normal,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </NativeText>
  );
};

export default Text;
