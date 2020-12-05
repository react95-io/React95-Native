import React, { useState } from 'react';
import { Panel, Select, Fieldset } from 'react95-native';

const options = ['apple', 'orange', 'banana', 'pear', 'watermelon'].map(o => ({
  label: o,
  value: o,
}));

const SelectExample = () => {
  const [value, setValue] = useState(options[0].value);
  return (
    <Panel style={{ flex: 1, padding: 20 }}>
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
        <Select
          options={options}
          value={value}
          onChange={newValue => setValue(newValue)}
          style={[{ width: 150 }]}
        />
      </Fieldset>
      <Fieldset label='Custom menu height:' style={[{ padding: 20 }]}>
        <Select
          menuMaxHeight={130}
          options={options}
          value={value}
          onChange={newValue => setValue(newValue)}
          style={[{ width: 150 }]}
        />
      </Fieldset>
    </Panel>
  );
};

export default SelectExample;
