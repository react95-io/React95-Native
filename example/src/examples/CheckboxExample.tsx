/* eslint-disable no-console */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox, Panel, Fieldset, Cutout } from 'react95-native';

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
      <Cutout>
        <View style={{ padding: 20 }}>
          <Fieldset variant='flat' label='Default'>
            <Checkbox
              variant='flat'
              status={isChecked ? 'checked' : 'unchecked'}
              onPress={() => setIsChecked(prevState => !prevState)}
              label='Potato'
            />
            <Checkbox
              variant='flat'
              status='checked'
              onPress={() => console.warn('pressed')}
              label='Disabled'
              disabled
            />
          </Fieldset>
          <Fieldset variant='flat' label='Indeterminate'>
            <Checkbox
              variant='flat'
              status={isIndeterminate ? 'indeterminate' : 'unchecked'}
              onPress={() => setIsIndeterminate(prevState => !prevState)}
              label='Potato'
            />
            <Checkbox
              variant='flat'
              status='indeterminate'
              onPress={() => console.warn('pressed')}
              label='Disabled'
              disabled
            />
          </Fieldset>
        </View>
      </Cutout>
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
