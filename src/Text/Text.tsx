import React, { useContext } from 'react';
import {
  StyleSheet,
  Text as NativeText,
  Linking,
  StyleProp,
  TextStyle,
} from 'react-native';

import { ThemeContext } from '../common/theming/Theme';
import { text } from '../common/styles';

type Props = React.ComponentProps<typeof NativeText> & {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  linkUrl?: string | null;
  disabled?: boolean;
  secondary?: boolean;
  bold?: boolean;
};

const Text = ({
  children,
  style = {},
  linkUrl = null,
  disabled = false,
  secondary = false,
  bold = false,
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

  const onLinkPress = () => {
    if (disabled || !linkUrl) return;

    Linking.openURL(linkUrl || '');
  };

  return (
    <NativeText
      style={[
        disabled ? text.disabled : secondary ? text.secondary : text.default,
        linkUrl ? { ...styles.link, color: theme.anchor } : {},
        {
          fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}
      onPress={onLinkPress}
      {...rest}
    >
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
});

export default Text;
