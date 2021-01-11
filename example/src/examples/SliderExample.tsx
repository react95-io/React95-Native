import React from 'react';
import { Slider, Fieldset } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const restrictedValues = [0, 20, 80, 100].map(n => ({
  label: `${n.toString()}°C`,
  value: n,
}));

const DividerExample = () => {
  const [value, setValue] = React.useState(0);
  const [withTicksValue, setWithTicksValue] = React.useState(0);

  const [restrictedValue, setRestrictedValue] = React.useState(
    restrictedValues[0].value,
  );

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <ExamplePanel>
      <Fieldset label='Default:' style={{ padding: 16 }}>
        <Slider
          onChange={handleChange}
          onChangeCommitted={v => console.warn('onChangeCommited', v)}
          value={value}
        />
      </Fieldset>

      <Fieldset label='With ticks:' style={{ padding: 16 }}>
        <Slider
          onChange={newValue => setWithTicksValue(newValue)}
          onChangeCommitted={v => console.warn('onChangeCommited', v)}
          value={withTicksValue}
          marks
          step={10}
          style={{ width: '80%' }}
        />
      </Fieldset>

      <Fieldset label='Restricted values:' style={{ padding: 16 }}>
        <Slider
          onChange={newValue => setRestrictedValue(newValue)}
          onChangeCommitted={v => console.warn('onChangeCommited', v)}
          value={restrictedValue}
          marks={restrictedValues}
          step={null}
        />
      </Fieldset>

      <Fieldset label='Disabled:' style={{ padding: 16 }}>
        <Slider
          disabled
          // value={restrictedValue}
          marks={restrictedValues}
          step={null}
        />
      </Fieldset>
    </ExamplePanel>
  );
};

export default DividerExample;
