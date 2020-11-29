import React from 'react';
import {
  View,
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  ViewStyle,
} from 'react-native';

import { original as theme } from '../common/themes';
import { blockSizes, text } from '../common/styles';
import { Border } from '../common/styleElements';

type Props = {
  value?: string;
  defaultValue?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  // TODO: add interface for react-natives TextInput
  // so we can separate react-natives TextInput props
  // from react95-native props
  [x: string]: any;
};

const TextInput = ({
  disabled,
  value,
  defaultValue,
  style = {},
  ...otherProps
}: Props) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Border variant='cutout' />
      <RNTextInput
        style={[
          styles.input,
          {
            backgroundColor: disabled ? theme.material : theme.canvas,
          },
          disabled && value ? text.disabled : text.default,
        ]}
        placeholderTextColor={theme.materialTextDisabled}
        defaultValue={defaultValue}
        value={value}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 4,
    minHeight: blockSizes.md,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 4,
    fontSize: 16,
  },
});

export default TextInput;
