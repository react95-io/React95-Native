import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { ThemeContext } from '../common/theming/Theme';
import { blockSizes } from '../common/styles';

// TODO: allow for no option selected
export type Option = {
  value: any;
  label: React.ReactNode;
};

type SelectItemProps = {
  option: Option;
  onPress: (value: any) => void;
  isSelected: boolean;
};

const SelectItem = ({ option, onPress, isSelected }: SelectItemProps) => {
  const theme = useContext(ThemeContext);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableHighlight
      onPress={() => onPress(option)}
      onHideUnderlay={() => setIsPressed(false)}
      onShowUnderlay={() => setIsPressed(true)}
      accessibilityRole='menuitem'
      underlayColor='none'
      // delay to prevent item highlighting on scroll
      delayPressIn={70}
    >
      <View
        style={[
          styles.center,
          styles.optionWrapper,
          {
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
  },
  optionText: {
    fontSize: 16,
    paddingLeft: 6,
  },
});

type SelectOptionsProps = {
  options: Array<Option>;
  values: [any];
  disabled?: boolean;
  // TODO: what to put below?
  onChange: (value: any) => void;
};

export default function getSelectOptions({
  options,
  values,
  onChange,
}: SelectOptionsProps) {
  const selectedOptions = options.filter(option =>
    values.includes(option.value),
  );

  const optionItems = options.map(option => (
    <SelectItem
      key={option.value}
      option={option}
      isSelected={selectedOptions.includes(option)}
      onPress={onChange}
    />
  ));
  return [selectedOptions, optionItems];
}
