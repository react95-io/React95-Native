import React from 'react';
import { View } from 'react-native';
import { Fieldset, Text, Cutout } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const FieldsetExample = () => {
  return (
    <ExamplePanel>
      <Fieldset label='Name:'>
        <Text>Some text here</Text>
      </Fieldset>
      <Fieldset disabled label='Disabled:'>
        <Text disabled>Some text here</Text>
      </Fieldset>
      <Fieldset>
        <Text>No label here</Text>
      </Fieldset>

      <Cutout>
        <View style={{ padding: 20 }}>
          <Fieldset variant='flat' label='Name:'>
            <Text>Some text here</Text>
          </Fieldset>
          <Fieldset variant='flat' disabled label='Disabled:'>
            <Text disabled>Some text here</Text>
          </Fieldset>
          <Fieldset variant='flat'>
            <Text>No label here</Text>
          </Fieldset>
        </View>
      </Cutout>
    </ExamplePanel>
  );
};

export default FieldsetExample;
