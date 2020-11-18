import React from 'react';
import { Panel, Text } from 'react95-native';

import Container from '../util/Container';

const TextExample = () => {
  return (
    <Container>
      <Container.Section title='Basic usage'>
        <Panel>
          <Text>Simple text</Text>
        </Panel>
      </Container.Section>
      <Container.Section title='Link'>
        <Panel>
          <Text linkUrl='https://react95.io'>React95 website</Text>
        </Panel>
      </Container.Section>
      <Container.Section title='Disabled'>
        <Panel>
          <Text disabled>Disabled</Text>
        </Panel>
      </Container.Section>
    </Container>
  );
};

export default TextExample;
