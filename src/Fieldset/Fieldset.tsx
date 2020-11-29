import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { original as theme } from '../common/themes';
import { Border } from '../common/styleElements';

export const testId = 'fieldset';

type Props = {
  label?: React.ReactNode;
  children: React.ReactNode;
  style?: Object;
};

const Fieldset = ({ children, label, style = {} }: Props) => {
  return (
    <View style={[styles.wrapper, style]} testID={testId}>
      <Border
        variant='well'
        invert
        style={[
          { marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2 },
        ]}
      />
      <Border variant='well' />
      {/* TODO: allow passing components to label (see web react95 checkbox example) */}
      {label && <Text style={[styles.label]}>{label}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginVertical: 12,
    padding: 12,
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 8,
    // TODO: how to properly center the label?
    transform: [{ translateY: -8 }],
    paddingHorizontal: 8,
    backgroundColor: theme.material,
    fontSize: 16,
    lineHeight: 16,
  },
});

export default Fieldset;