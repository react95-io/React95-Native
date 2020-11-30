import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import SwitchBase from '../SwitchBase';

type Props = {
  disabled?: boolean;
  label?: string;
  onPress?: () => void;
  status: 'checked' | 'unchecked';
  style?: StyleProp<ViewStyle>;
};

const Radio = ({
  disabled = false,
  label = '',
  onPress = () => {},
  status,
  style = {},
}: Props) => {
  return (
    <SwitchBase
      component='radio'
      disabled={disabled}
      label={label}
      onPress={onPress}
      status={status}
      style={style}
    />
  );
};

export default Radio;
