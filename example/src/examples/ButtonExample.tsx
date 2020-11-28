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
        <Button
          active
          variant='default'
          onPress={() => console.warn('Pressed')}
        >
          Active
        </Button>

        <Button
          variant='default'
          disabled
          onPress={() => console.warn('Pressed')}
        >
          Disabled
        </Button>
      </Container.Section>

      <Container.Section title='Primary'>
        <Button
          primary
          variant='default'
          onPress={() => console.warn('Pressed')}
        >
          Primary
        </Button>

        <Button
          primary
          active
          variant='default'
          onPress={() => console.warn('Pressed')}
        >
          Active
        </Button>

        <Button
          primary
          variant='default'
          disabled
          onPress={() => console.warn('Pressed')}
        >
          Disabled
        </Button>
      </Container.Section>

      <Container.Section title='Menu'>
        <Panel style={{ padding: 12 }}>
          <Button variant='menu' onPress={() => console.warn('Pressed')}>
            Menu
          </Button>

          <Button active variant='menu' onPress={() => console.warn('Pressed')}>
            Active
          </Button>

          <Button
            variant='menu'
            disabled
            onPress={() => console.warn('Pressed')}
          >
            Disabled
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
