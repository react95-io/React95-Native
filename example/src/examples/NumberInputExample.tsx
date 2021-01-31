import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NumberInput, Fieldset, Panel } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const NumberInputExample = () => {
  const [value, setValue] = useState(20);

  const handleChange = (newValue: number) => setValue(newValue);
  return (
    <ExamplePanel variant='clear' style={styles.container}>
      <Fieldset label='Default' style={[styles.fieldset]}>
        <NumberInput value={value} onChange={handleChange} />
        <NumberInput
          disabled
          value={20}
          style={[{ marginTop: 20 }]}
          inputWidth={80}
        />
      </Fieldset>
      <Fieldset label='Uncontrolled' style={[styles.fieldset]}>
        <NumberInput
          min={0}
          max={3}
          defaultValue={1.5}
          step={0.3}
          inputWidth={80}
        />
      </Fieldset>

      <Panel variant='cutout' background='canvas' style={{ padding: 20 }}>
        <Fieldset variant='flat' label='Flat' style={[styles.fieldset]}>
          <NumberInput
            variant='flat'
            min={0}
            max={3}
            defaultValue={1.5}
            step={0.3}
            inputWidth={80}
          />
          <NumberInput
            variant='flat'
            disabled
            value={20}
            style={[{ marginTop: 20 }]}
            inputWidth={80}
          />
        </Fieldset>
      </Panel>
    </ExamplePanel>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldset: {
    padding: 20,
  },
});

export default NumberInputExample;
