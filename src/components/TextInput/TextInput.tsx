import React, { useContext } from 'react';
import {
  View,
  StyleProp,
  StyleSheet,
  TextInput as NativeTextInput,
  ViewStyle,
} from 'react-native';

import { ThemeContext } from '../../styles/theming/Theme';
import { blockSizes } from '../../styles/styles';
import { Border } from '../../styles/styleElements';

type Props = React.ComponentPropsWithRef<typeof NativeTextInput> & {
  value?: string;
  defaultValue?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  variant?: 'default' | 'flat';
};

// TODO: implement scrollbars in TextInput

const TextInput = ({
  disabled,
  value,
  variant = 'default',
  defaultValue,
  style = {},
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);
  const hasValue = !!(value || defaultValue);

  const isFlat = variant === 'flat';

  const getBackgroundColor = () => {
    if (isFlat) {
      return disabled ? theme.flatLight : 'transparent';
    }
    return disabled ? theme.material : theme.canvas;
  };

  return (
    <View style={[styles.wrapper, { padding: isFlat ? 2 : 4 }, style]}>
      <Border variant={isFlat ? 'flat' : 'cutout'} />
      <NativeTextInput
        style={[
          styles.input,
          {
            backgroundColor: getBackgroundColor(),
          },
          theme.text.regular,
          disabled && hasValue ? theme.text.disabled : theme.text.default,
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

export default TextInput;
