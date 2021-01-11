import React, { useState } from 'react';
import { Select, Fieldset } from 'react95-native';

import { View } from 'react-native';
import ExamplePanel from '../util/ExamplePanel';

const options = ['apple', 'orange', 'banana', 'pear', 'watermelon'].map(o => ({
  label: o,
  value: o,
}));

const SelectExample = () => {
  const [value, setValue] = useState(options[0].value);
  return (
    <ExamplePanel variant='clear'>
      <Fieldset label='Disabled:' style={[{ padding: 20 }]}>
        <Select
          disabled
          options={options}
          value={value}
          onChange={newValue => setValue(newValue)}
          style={[{ width: 150 }]}
        />
      </Fieldset>
      <Fieldset label='Default:' style={[{ padding: 20 }]}>
        {/* TODO: fix select dropdown zIndex issue */}
        <View style={{ zIndex: 999 }}>
          <Select
            menuMaxHeight={130}
            options={options}
            value={value}
            onChange={newValue => setValue(newValue)}
            style={[{ width: 150 }]}
          />
        </View>
      </Fieldset>
    </ExamplePanel>
  );
};

export default SelectExample;
