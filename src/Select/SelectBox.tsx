import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Border } from '../common/styleElements';
import { ThemeContext } from '../common/theming/Theme';
import getSelectOptions, { Option } from './SelectBase';

import { ScrollView } from '..';
// TODO: multiselect
// TODO: disabled,
// TODO: original scrollbars

type SelectBoxProps = {
  options: Array<Option>;
  value: [any] | any;
  //   disabled?: boolean;
  // TODO: what to put below?
  onChange: (value: any) => void;
  style?: StyleProp<ViewStyle>;
};

const SelectBox = ({
  value,
  options = [],
  //   disabled = false,
  onChange,
  style,
}: SelectBoxProps) => {
  const theme = useContext(ThemeContext);

  const [, selectOptions] = getSelectOptions({
    options,
    values: [value],
    onChange: handleOptionSelect,
  });

  function handleOptionSelect(option: Option) {
    onChange(option.value);
  }

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.canvas }, style]}>
      <Border variant='cutout' />
      <ScrollView>
        <View style={[styles.content, { backgroundColor: theme.canvas }]}>
          {selectOptions}
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectBox;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  content: {
    padding: 2,
  },
});
