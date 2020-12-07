/* eslint-disable no-console */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Radio, Panel, Fieldset } from 'react95-native';

const CheckboxExample = () => {
  const [value, setValue] = useState('Apple');

  return (
    <Panel style={styles.container}>
      <Fieldset label='Default'>
        <Radio
          status={value === 'Apple' ? 'checked' : 'unchecked'}
          onPress={() => setValue('Apple')}
          label='Apple'
        />
        <Radio
          status={value === 'Orange' ? 'checked' : 'unchecked'}
          onPress={() => setValue('Orange')}
          label='Orange'
        />
        <Radio
          status={value === 'Watermelon' ? 'checked' : 'unchecked'}
          onPress={() => setValue('Watermelon')}
          label='Watermelon'
        />
      </Fieldset>
      <Fieldset label='Disabled'>
        <Radio
          status='checked'
          onPress={() => console.warn('pressed')}
          label='Apple'
          disabled
        />
        <Radio
          status='unchecked'
          onPress={() => console.warn('pressed')}
          label='Pear'
          disabled
        />
      </Fieldset>
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default CheckboxExample;
