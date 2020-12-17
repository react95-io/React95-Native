import React from 'react';
import { Panel, Fieldset, Text } from 'react95-native';

const DividerExample = () => {
  return (
    <Panel style={{ flex: 1, padding: 20 }}>
      <Text style={{ marginBottom: 20 }}>Default</Text>
      <Fieldset label='Name:'>
        <Text>Some text here</Text>
      </Fieldset>
      <Fieldset>
        <Text>No label here</Text>
      </Fieldset>
    </Panel>
  );
};

export default DividerExample;
