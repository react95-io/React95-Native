import React, { useState } from 'react';
import { SelectBox, Fieldset } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const options = [
  'apple',
  'orange',
  'banana',
  'pear',
  'watermelon',
  'kiwi',
  'raspberry',
  'pineapple',
  'grapefruit',
].map(option => ({
  label: option,
  value: option,
}));

const SelectBoxExample = () => {
  const [value, setValue] = useState(options[0].value);
  return (
    <ExamplePanel variant='clear'>
      <Fieldset label='Default:' style={[{ padding: 20 }]}>
        <SelectBox
          options={options}
          value={value}
          onChange={newValue => setValue(newValue)}
          style={[{ height: 180 }]}
        />
      </Fieldset>
    </ExamplePanel>
  );
};

export default SelectBoxExample;
