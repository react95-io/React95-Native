import React from 'react';
import { View } from 'react-native';
import { Fieldset, Text, Panel } from 'react95-native';

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

      <Panel variant='cutout' background='canvas'>
        <View style={{ padding: 20 }}>
          <Fieldset variant='flat' label='Name:'>
            <Text>Some text here</Text>
          </Fieldset>
          <Fieldset variant='flat' disabled label='Disabled:'>
            <Text disabled>Some text here</Text>
          </Fieldset>
        </View>
      </Panel>
    </ExamplePanel>
  );
};

export default FieldsetExample;
