import React from 'react';

import { Container, Section } from './common';

import { Button, Panel } from '../../../src';

const ButtonExample = () => {
  return (
    <Container>
      <Section title='Default'>
        <Button variant='default' onPress={() => console.warn('Pressed')}>
          Default
        </Button>
      </Section>

      <Section title='Menu'>
        <Panel style={{ padding: 12 }}>
          <Button variant='menu' onPress={() => console.warn('Pressed')}>
            Potato
          </Button>
        </Panel>
      </Section>

      <Section title='Flat'>
        <Button variant='flat' onPress={() => console.warn('Pressed')}>
          This flat variant needs to be improved
        </Button>
      </Section>
    </Container>
  );
};

export default ButtonExample;
