import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import type { Theme, AnyValue } from '../../types';
import { withTheme } from '../../core/theming';

import { blockSizes } from '../../styles/styles';

import { Text } from '../..';
// TODO: allow for no option selected
export type Option = {
  label: React.ReactNode;
  value: AnyValue;
};

type SelectItemProps = {
  isSelected: boolean;
  onPress: (option: Option) => void;
  option: Option;
  theme: Theme;
};

const SelectItem = ({
  isSelected,
  onPress,
  option,
  theme,
}: SelectItemProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableHighlight
      onPress={() => onPress(option)}
      onHideUnderlay={() => setIsPressed(false)}
      onShowUnderlay={() => setIsPressed(true)}
      underlayColor='none'
      // delay to prevent item highlighting on scroll
      delayPressIn={70}
      activeOpacity={1}
    >
      <View
        style={[
          styles.center,
          styles.optionWrapper,
          {
            borderColor: isPressed ? theme.focusSecondary : 'transparent',
            backgroundColor:
              isPressed || isSelected ? theme.hoverBackground : theme.canvas,
          },
        ]}
      >
        <Text
          style={[
            styles.optionText,
            {
              color:
                isPressed || isSelected
                  ? theme.canvasTextInvert
                  : theme.canvasText,
            },
          ]}
        >
          {option.label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const SelectItemWithTheme = withTheme(SelectItem);

const selectHeight = blockSizes.md + 2;

const styles = StyleSheet.create({
  center: {
    flexGrow: 1,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  optionWrapper: {
    height: selectHeight - 4,
    borderWidth: 2,
    borderStyle: 'dotted',
  },
  optionText: {
    fontSize: 16,
    paddingLeft: 6,
  },
});

type SelectOptionsProps = {
  options: Array<Option>;
  values: [AnyValue];
  onChange: (option: Option) => void;
  theme: Theme;
};

export default function getSelectOptions({
  options,
  values,
  onChange,
  theme,
}: SelectOptionsProps): [Option[], JSX.Element[]] {
  const selectedOptions = options.filter(option =>
    values.includes(option.value),
  );

  const optionItems = options.map(option => (
    <SelectItemWithTheme
      theme={theme}
      key={option.value}
      option={option}
      isSelected={selectedOptions.includes(option)}
      onPress={onChange}
    />
  ));
  return [selectedOptions, optionItems];
}
