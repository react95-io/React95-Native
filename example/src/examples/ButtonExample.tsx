import React from 'react';
import { Button, Panel } from 'react95-native';

import Container from '../util/Container';

const ButtonExample = () => {
  return (
    <Container>
      <Container.Section title='Default'>
        <Button variant='default' onPress={() => console.warn('Pressed')}>
          Default
        </Button>
      </Container.Section>

      <Container.Section title='Menu'>
        <Panel style={{ padding: 12 }}>
          <Button variant='menu' onPress={() => console.warn('Pressed')}>
            Potato
          </Button>
        </Panel>
      </Container.Section>

      <Container.Section title='Flat'>
        <Button variant='flat' onPress={() => console.warn('Pressed')}>
          This flat variant needs to be improved
        </Button>
      </Container.Section>
    </Container>
  );
};

export default ButtonExample;
