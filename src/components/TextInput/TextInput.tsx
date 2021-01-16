import React from 'react';
import {
  View,
  StyleProp,
  StyleSheet,
  TextInput as NativeTextInput,
  ViewStyle,
} from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { blockSizes, builtTextStyles } from '../../styles/styles';
import { Border } from '../../styles/styleElements';

type Props = React.ComponentPropsWithRef<typeof NativeTextInput> & {
  defaultValue?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  value?: string;
  variant?: 'default' | 'flat';
};

// TODO: implement scrollbars in TextInput

const TextInput = ({
  defaultValue,
  disabled,
  style = {},
  theme,
  value,
  variant = 'default',
  ...rest
}: Props) => {
  const hasValue = !!(value || defaultValue);

  const isFlat = variant === 'flat';

  const getBackgroundColor = () => {
    if (isFlat) {
      return disabled ? theme.flatLight : 'transparent';
    }
    return disabled ? theme.material : theme.canvas;
  };

  const textStyles = builtTextStyles(theme);
  return (
    <View style={[styles.wrapper, { padding: isFlat ? 2 : 4 }, style]}>
      <Border theme={theme} variant={isFlat ? 'flat' : 'cutout'} />
      <NativeTextInput
        style={[
          styles.input,
          {
            backgroundColor: getBackgroundColor(),
          },
          textStyles.regular,
          disabled && hasValue ? textStyles.disabled : textStyles.default,
        ]}
        placeholderTextColor={theme.materialTextDisabled}
        defaultValue={defaultValue}
        value={value}
        editable={!disabled}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minHeight: blockSizes.md,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 4,
  },
});

export default withTheme(TextInput);
