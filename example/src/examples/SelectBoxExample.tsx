import React, { useState } from 'react';
import { Panel, SelectBox, Fieldset } from 'react95-native';

const options = ['apple', 'orange', 'banana', 'pear', 'watermelon'].map(
  option => ({
    label: option,
    value: option,
  }),
);

const SelectBoxExample = () => {
  const [value, setValue] = useState(options[0].value);
  return (
    <Panel style={{ flex: 1, padding: 20 }}>
      <Fieldset label='Default:' style={[{ padding: 20 }]}>
        <SelectBox
          options={options}
          value={value}
          onChange={newValue => setValue(newValue)}
        />
      </Fieldset>
      <Fieldset label='Custom size:' style={[{ padding: 20 }]}>
        <SelectBox
          options={options}
          value={value}
          onChange={newValue => setValue(newValue)}
          style={[{ height: 120 }]}
        />
      </Fieldset>
    </Panel>
  );
};

export default SelectBoxExample;
