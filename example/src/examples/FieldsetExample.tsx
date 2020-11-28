import React from 'react';
import { View, Text } from 'react-native';
import { Panel, Fieldset } from 'react95-native';

const DividerExample = () => {
  return (
    <Panel style={{ flex: 1, padding: 20 }}>
      <Text style={{ marginBottom: 20 }}>Default</Text>
      <Fieldset label='Name:'>
        <Text style={[{ fontSize: 16 }]}>Some text here</Text>
      </Fieldset>
      <Fieldset>
        <Text style={[{ fontSize: 16 }]}>No label here</Text>
      </Fieldset>
    </Panel>
  );
};

export default DividerExample;
