import React, { useContext } from 'react';
import {
  View,
  StyleProp,
  StyleSheet,
  TextInput as NativeTextInput,
  ViewStyle,
} from 'react-native';

import { ThemeContext } from '../common/theming/Theme';
import { blockSizes } from '../common/styles';
import { Border } from '../common/styleElements';

type Props = React.ComponentPropsWithRef<typeof NativeTextInput> & {
  value?: string;
  defaultValue?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

// TODO: implement scrollbars in TextInput

const TextInput = ({
  disabled,
  value,
  defaultValue,
  style = {},
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);
  const hasValue = !!(value || defaultValue);

  return (
    <View style={[styles.wrapper, style]}>
      <Border variant='cutout' />
      <NativeTextInput
        style={[
          styles.input,
          {
            backgroundColor: disabled ? theme.material : theme.canvas,
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
    padding: 4,
    minHeight: blockSizes.md,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 4,
  },
});

export default TextInput;
