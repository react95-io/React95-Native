import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ThemeContext } from '../common/theming/Theme';

import getSelectOptions, { Option } from './SelectBase';
import { Border } from '../common/styleElements';
import { ScrollView } from '..';

// TODO: multiselect

type Props = {
  options: Array<Option>;
  value: [any] | any;
  onChange: (value: any) => void;
  style?: StyleProp<ViewStyle>;
};

const SelectBox = ({
  value,
  options = [],
  onChange,
  style,
  ...rest
}: Props) => {
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
    <View
      style={[styles.wrapper, { backgroundColor: theme.canvas }, style]}
      {...rest}
    >
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
