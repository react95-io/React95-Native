import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import type { Theme, AnyValue } from '../../types';
import { withTheme } from '../../core/theming';

import getSelectOptions, { Option } from './SelectBase';
import { ScrollView, Panel } from '../..';

// TODO: multiselect

type Props = {
  onChange: (value: AnyValue) => void;
  options: Array<Option>;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  value: [AnyValue] | AnyValue;
};

const SelectBox = ({
  onChange,
  options = [],
  style,
  theme,
  value,
  ...rest
}: Props) => {
  const [, selectOptions] = getSelectOptions({
    theme,
    options,
    values: [value],
    onChange: handleOptionSelect,
  });

  function handleOptionSelect(option: Option) {
    onChange(option.value);
  }

  return (
    <Panel
      theme={theme}
      variant='cutout'
      background='canvas'
      style={[styles.wrapper, style]}
      {...rest}
    >
      <ScrollView theme={theme}>
        <View style={[styles.content, { backgroundColor: theme.canvas }]}>
          {selectOptions}
        </View>
      </ScrollView>
    </Panel>
  );
};

export default withTheme(SelectBox);

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  content: {
    padding: 2,
  },
});
