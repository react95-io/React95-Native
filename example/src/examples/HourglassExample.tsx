import React from 'react';
import { Fieldset, Hourglass } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const HourglassExample = () => {
  return (
    <ExamplePanel>
      <Fieldset label='Default:'>
        <Hourglass />
      </Fieldset>
      <Fieldset label='Custom size:'>
        <Hourglass size={65} />
      </Fieldset>
    </ExamplePanel>
  );
};

export default HourglassExample;
