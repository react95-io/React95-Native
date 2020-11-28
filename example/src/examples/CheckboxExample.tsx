import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Checkbox, Cutout, original } from 'react95-native';
import Container from '../util/Container';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <Container.Section title='Basic usage'>
        <Cutout style={styles.container}>
          <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked(oldIsChecked => !oldIsChecked)}
            label='Potato'
          />
        </Cutout>
      </Container.Section>
      <Container.Section title='Disabled'>
        <Cutout style={styles.container}>
          <Checkbox
            status='checked'
            onPress={() => console.warn('pressed')}
            label='Disabled'
            disabled
          />
        </Cutout>
      </Container.Section>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: original.material,
  },
});

export default CheckboxExample;
