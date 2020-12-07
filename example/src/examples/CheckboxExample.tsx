/* eslint-disable no-console */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Checkbox, Panel, Fieldset } from 'react95-native';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isIndeterminate, setIsIndeterminate] = useState(true);

  return (
    <Panel variant='clear' style={styles.container}>
      <Fieldset label='Default'>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setIsChecked(prevState => !prevState)}
          label='Potato'
        />
        <Checkbox
          status='checked'
          onPress={() => console.warn('pressed')}
          label='Disabled'
          disabled
        />
      </Fieldset>
      <Fieldset label='Indeterminate'>
        <Checkbox
          status={isIndeterminate ? 'indeterminate' : 'unchecked'}
          onPress={() => setIsIndeterminate(prevState => !prevState)}
          label='Potato'
        />
        <Checkbox
          status='indeterminate'
          onPress={() => console.warn('pressed')}
          label='Disabled'
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
