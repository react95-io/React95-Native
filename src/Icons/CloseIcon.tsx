import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { ChevronIcon } from '..';

type Props = {
  disabled?: boolean;
  segments?: number;
  style?: StyleProp<ViewStyle>;
};

const CloseIcon = ({
  disabled = false,
  segments = 4,
  style,
  ...rest
}: Props) => {
  return (
    <View style={[styles.wrapper, style]} {...rest}>
      <ChevronIcon disabled={disabled} segments={segments} direction='right' />
      <ChevronIcon
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

export default CloseIcon;
