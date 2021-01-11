/* eslint-disable no-console */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Radio, Fieldset, Cutout } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const RadioExample = () => {
  const [value, setValue] = useState('Apple');

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
      <Cutout>
        <View style={{ padding: 20 }}>
          <Fieldset variant='flat' label='Default'>
            <Radio
              variant='flat'
              status={value === 'Apple' ? 'checked' : 'unchecked'}
              onPress={() => setValue('Apple')}
              label='Apple'
            />
            <Radio
              variant='flat'
              status={value === 'Orange' ? 'checked' : 'unchecked'}
              onPress={() => setValue('Orange')}
              label='Orange'
            />
            <Radio
              variant='flat'
              status={value === 'Watermelon' ? 'checked' : 'unchecked'}
              onPress={() => setValue('Watermelon')}
              label='Watermelon'
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
