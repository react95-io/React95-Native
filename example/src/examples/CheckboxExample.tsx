/* eslint-disable no-console */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox, Fieldset, Panel } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedFlat, setIsCheckedFlat] = useState(true);

  const [isIndeterminate, setIsIndeterminate] = useState(true);

  return (
    <ExamplePanel>
      <Fieldset label='Default'>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setIsChecked(prevState => !prevState)}
          label='Cheese'
        />
        <Checkbox status='checked' label='Pineapple' disabled />
      </Fieldset>
      <Fieldset label='Indeterminate'>
        <Checkbox
          status={isIndeterminate ? 'indeterminate' : 'unchecked'}
          onPress={() => setIsIndeterminate(prevState => !prevState)}
          label='Cheese'
        />
        <Checkbox status='indeterminate' label='Pineapple' disabled />
      </Fieldset>
      <Panel variant='cutout' background='canvas'>
        <View style={{ padding: 20 }}>
          <Fieldset variant='flat' label='Default'>
            <Checkbox
              variant='flat'
              status={isCheckedFlat ? 'checked' : 'unchecked'}
              onPress={() => setIsCheckedFlat(prevState => !prevState)}
              label='Cheese'
            />
            <Checkbox
              variant='flat'
              status='checked'
              label='Pineapple'
              disabled
            />
          </Fieldset>
          <Fieldset variant='flat' label='Indeterminate'>
            <Checkbox
              variant='flat'
              status={isIndeterminate ? 'indeterminate' : 'unchecked'}
              onPress={() => setIsIndeterminate(prevState => !prevState)}
              label='Cheese'
            />
            <Checkbox
              variant='flat'
              status='indeterminate'
              label='Pineapple'
              disabled
            />
          </Fieldset>
        </View>
      </Panel>
    </ExamplePanel>
  );
};

export default CheckboxExample;
