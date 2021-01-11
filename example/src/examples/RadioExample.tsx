/* eslint-disable no-console */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Radio, Fieldset, Cutout } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const RadioExample = () => {
  const [value, setValue] = useState('Apple');
  const [valueFlat, setValueFlat] = useState('Apple');

  return (
    <ExamplePanel variant='clear'>
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
      <Cutout>
        <View style={{ padding: 16 }}>
          <Fieldset variant='flat' label='Default'>
            <Radio
              variant='flat'
              status={valueFlat === 'Apple' ? 'checked' : 'unchecked'}
              onPress={() => setValueFlat('Apple')}
              label='Apple'
            />
            <Radio
              variant='flat'
              status={valueFlat === 'Orange' ? 'checked' : 'unchecked'}
              onPress={() => setValueFlat('Orange')}
              label='Orange'
            />
          </Fieldset>
          <Fieldset variant='flat' label='Disabled'>
            <Radio
              variant='flat'
              status='checked'
              onPress={() => console.warn('pressed')}
              label='Apple'
              disabled
            />
            <Radio
              variant='flat'
              status='unchecked'
              onPress={() => console.warn('pressed')}
              label='Pear'
              disabled
            />
          </Fieldset>
        </View>
      </Cutout>
    </ExamplePanel>
  );
};

export default RadioExample;
