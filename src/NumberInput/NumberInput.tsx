import React from 'react';
import { View, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import type { DimensionValue } from '../types';
import { blockSizes } from '../common/styles';
import { clamp } from '../common/utils';

import { TextInput, Button, Text } from '..';

type Props = {
  defaultValue?: number;
  disabled?: boolean;
  inputWidth?: DimensionValue;
  max?: number | null;
  min?: number | null;
  onChange?: (value: number) => void;
  step?: number;
  style?: StyleProp<ViewStyle>;
  value?: number;
  variant?: 'default' | 'flat';
};

// TODO: accessibility etc.
// TODO: allow to center input text horizontally
const NumberInput = ({
  defaultValue,
  disabled,
  inputWidth,
  max = null,
  min = null,
  onChange,
  step = 1,
  style = {},
  value,
  variant = 'default',
  ...rest
}: Props) => {
  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    value,
    defaultValue,
  });

  const handleClick = (val: number) => {
    const stateValue = parseFloat(valueDerived);
    const newValue = clamp(
      +parseFloat((stateValue + val).toString()).toFixed(2),
      min,
      max,
    ).toString();

    setValueState(parseFloat(newValue));

    if (onChange) {
      onChange(parseFloat(newValue));
    }
  };

  const valueDerivedNumber = parseFloat(valueDerived);

  const isDecrementDisabled = disabled || valueDerivedNumber === min;
  const isIncrementDisabled = disabled || valueDerivedNumber === max;
  const isFlat = variant === 'flat';

  return (
    <View style={[styles.wrapper, style]}>
      <Button
        disabled={isDecrementDisabled}
        onPress={() => handleClick(-step)}
        variant={isFlat ? 'flat' : 'outside'}
        style={styles.button}
        testID='decrement'
      >
        <Text disabled={isDecrementDisabled} style={styles.buttonText}>
          -
        </Text>
      </Button>
      <TextInput
        variant={variant}
        disabled={disabled}
        value={valueDerived.toString()}
        style={[styles.input, { width: inputWidth || 'auto' }]}
        editable={false}
        // eslint-disable-next-line react/jsx-props-no-spreading
        testID='input'
        {...rest}
      />
      <Button
        disabled={isIncrementDisabled}
        onPress={() => handleClick(step)}
        variant={isFlat ? 'flat' : 'outside'}
        style={styles.button}
        testID='increment'
      >
        <Text disabled={isIncrementDisabled} style={styles.buttonText}>
          +
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 2,
    minWidth: blockSizes.md + 2,
  },
  button: {
    width: blockSizes.md,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default NumberInput;
