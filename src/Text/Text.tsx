import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  Linking,
  StyleProp,
  TextStyle,
} from 'react-native';

import { original as theme } from '../common/themes';
import { text } from '../common/styles';

type Props = {
  children: string;
  style?: StyleProp<TextStyle>;
  linkUrl?: string | null;
  disabled?: boolean;
};

const Text = ({
  children,
  style = {},
  linkUrl = null,
  disabled = false,
}: Props) => {
  const onLinkPress = () => {
    if (disabled || !linkUrl) return;

    Linking.openURL(linkUrl || '');
  };

  return (
    <RNText
      style={[
        disabled ? text.disabled : text.default,
        linkUrl ? styles.link : {},
        style,
      ]}
      onPress={onLinkPress}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  link: {
    color: theme.anchor,
    textDecorationLine: 'underline',
  },
});

export default Text;
