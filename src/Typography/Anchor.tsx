import React, { useContext } from 'react';
import { Text as NativeText, StyleProp, TextStyle } from 'react-native';

import { ThemeContext } from '../common/theming/Theme';

type Props = React.ComponentProps<typeof NativeText> & {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  underline?: boolean;
};

const Anchor = ({ underline = false, children, style, ...rest }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <NativeText
      style={[
        {
          color: theme.anchor,
          textDecorationLine: underline ? 'underline' : 'none',
          fontSize: 16,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </NativeText>
  );
};

export default Anchor;
