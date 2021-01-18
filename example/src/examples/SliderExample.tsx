import React from 'react';
import { Slider, Fieldset } from 'react95-native';
import * as Haptics from 'expo-haptics';

import ExamplePanel from '../util/ExamplePanel';

const restrictedValues = [0, 20, 80, 100].map(n => ({
  label: `${n.toString()}°C`,
  value: n,
}));

const hapticFeedback = () =>
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

const DividerExample = () => {
  const [value, setValue] = React.useState(0);
  const [withTicksValue, setWithTicksValue] = React.useState(0);
  const [restrictedValue, setRestrictedValue] = React.useState(
    restrictedValues[0].value,
  );

  const handleChange = (newValue: number) => {
    hapticFeedback();
    setValue(newValue);
  };

  const handleWithTicksValueChange = (newValue: number) => {
    hapticFeedback();
    setWithTicksValue(newValue);
  };

  const handleRestrictedValueChange = (newValue: number) => {
    hapticFeedback();
    setRestrictedValue(newValue);
  };

  return (
    <ExamplePanel>
      <Fieldset label='Default:' style={{ padding: 16 }}>
        <Slider
          step={2}
          onChange={handleChange}
          onChangeCommitted={v => console.warn('onChangeCommited', v)}
          value={value}
        />
      </Fieldset>

      <Fieldset label='With ticks:' style={{ padding: 16 }}>
        <Slider
          onChange={handleWithTicksValueChange}
          onChangeCommitted={v => console.warn('onChangeCommited', v)}
          value={withTicksValue}
          marks
          step={10}
        />
      </Fieldset>

      <Fieldset label='Restricted values:' style={{ padding: 24 }}>
        <Slider
          onChange={handleRestrictedValueChange}
          onChangeCommitted={v => console.warn('onChangeCommited', v)}
          value={restrictedValue}
          marks={restrictedValues}
          step={null}
        />
      </Fieldset>

      <Fieldset label='Disabled:' style={{ padding: 24 }}>
        <Slider disabled marks={restrictedValues} step={null} />
      </Fieldset>
    </ExamplePanel>
  );
};

export default DividerExample;
