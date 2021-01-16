import React from 'react';
import { View, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import useControlledOrUncontrolled from '../../hooks/useControlledOrUncontrolled';

import type { Theme, DimensionValue } from '../../types';
import { withTheme } from '../../core/theming';

import { blockSizes } from '../../styles/styles';
import { clamp } from '../../utils';

import { TextInput, Button, ArrowIcon } from '../..';

type Props = {
  defaultValue?: number;
  disabled?: boolean;
  inputWidth?: DimensionValue;
  max?: number | null;
  min?: number | null;
  onChange?: (value: number) => void;
  step?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  value?: number;
  variant?: 'default' | 'flat';
};

// TODO: allow to center input text horizontally
// TODO: how are uncontrolled inputs handled in RN?
const NumberInput = ({
  defaultValue,
  disabled,
  inputWidth,
  max = null,
  min = null,
  onChange,
  step = 1,
  style = {},
  theme,
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
    <View
      style={[styles.wrapper, style]}
      accessibilityState={{ disabled }}
      // TODO: are these accessibility traits correct?
      accessibilityRole='adjustable'
      accessibilityValue={{
        min: min === null ? undefined : min,
        max: max === null ? undefined : max,
        now: valueDerived,
      }}
    >
      <Button
        theme={theme}
        disabled={isDecrementDisabled}
        onPress={() => handleClick(-step)}
        variant={isFlat ? 'flat' : 'raised'}
        style={styles.button}
        testID='decrement'
      >
        <ArrowIcon
          theme={theme}
          segments={4}
          disabled={isDecrementDisabled}
          direction='left'
        />
      </Button>
      <TextInput
        theme={theme}
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
        theme={theme}
        disabled={isIncrementDisabled}
        onPress={() => handleClick(step)}
        variant={isFlat ? 'flat' : 'raised'}
        style={styles.button}
        testID='increment'
      >
        <ArrowIcon
          theme={theme}
          segments={4}
          disabled={isIncrementDisabled}
          direction='right'
        />
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

export default withTheme(NumberInput);
