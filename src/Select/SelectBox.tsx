import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { original as theme } from '../common/themes';
import { Border } from '../common/styleElements';

import getSelectOptions, { Option } from './SelectBase';

// TODO: multiselect
// TODO: disabled,
// TODO: original scrollbars

type SelectBoxProps = {
  options: Array<Option>;
  value: [any] | any;
  //   disabled?: boolean;
  // TODO: what to put below?
  onChange: () => void;
  style?: Object;
};

const SelectBox = ({
  value,
  options = [],
  //   disabled = false,
  onChange,
  style,
}: SelectBoxProps) => {
  function handleOptionSelect(option: Option) {
    onChange(option.value);
  }

  const [, selectOptions] = getSelectOptions({
    options,
    values: [value],
    onChange: handleOptionSelect,
  });

  return (
    <View style={[styles.wrapper, style]}>
      <Border variant='cutout' />
      <ScrollView>
        <View style={[styles.content]}>{selectOptions}</View>
      </ScrollView>
    </View>
  );
};

export default SelectBox;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: theme.canvas,
  },
  content: {
    backgroundColor: theme.canvas,
    padding: 2,
  },
});
