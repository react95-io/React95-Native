import React from 'react';
import { StyleSheet, Text as RNText, Linking } from 'react-native';

import { original as theme } from '../common/themes';

type Props = {
  children: string;
  style?: Object;
  linkUrl?: string | null;
  disabled?: boolean;
};

const Text = ({
  children,
  style = {},
  linkUrl = null,
  disabled = false
}: Props) => {
  const onLinkPress = () => {
    if (disabled || !linkUrl) return;

    Linking.openURL(linkUrl || '');
  };

  return (
    <RNText
      style={[
        styles.text,
        linkUrl && styles.link,
        disabled && styles.disabled,
        style
      ]}
      onPress={onLinkPress}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.materialText
  },
  link: {
    color: theme.anchor,
    textDecorationLine: 'underline'
  },
  disabled: {
    color: theme.materialTextDisabled
  }
});

export default Text;
