import React from 'react';
import { Panel, Fieldset, Hourglass } from 'react95-native';

const HourglassExample = () => {
  return (
    <Panel style={{ flex: 1, padding: 20 }}>
      <Fieldset label='Default:'>
        <Hourglass />
      </Fieldset>
      <Fieldset label='Custom size:'>
        <Hourglass size={35} />
        <Hourglass size={65} />
      </Fieldset>
    </Panel>
  );
};

export default HourglassExample;
