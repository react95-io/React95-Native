import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';
import { ChevronIcon } from '../..';

type Props = {
  disabled?: boolean;
  segments?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

const CloseIcon = ({
  disabled = false,
  segments = 4,
  style,
  theme,
  ...rest
}: Props) => {
  return (
    <View style={[styles.wrapper, style]} {...rest}>
      <ChevronIcon
        theme={theme}
        disabled={disabled}
        segments={segments}
        direction='right'
      />
      <ChevronIcon
        theme={theme}
        disabled={disabled}
        segments={segments}
        direction='left'
        style={{ marginLeft: -2, marginRight: 2 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default withTheme(CloseIcon);
