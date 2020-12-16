import React from 'react';
import { Panel, Text, Anchor } from 'react95-native';

import Container from '../util/Container';

const TypographyExample = () => {
  return (
    <Container>
      <Container.Section title='Basic usage'>
        <Panel>
          <Text>Simple text</Text>
        </Panel>
      </Container.Section>
      <Container.Section title='Bold'>
        <Panel>
          <Text bold>Bold text</Text>
        </Panel>
      </Container.Section>
      <Container.Section title='Disabled'>
        <Panel>
          <Text disabled>Disabled</Text>
        </Panel>
      </Container.Section>

      <Container.Section title='Anchor'>
        <Panel>
          <Anchor>React95 website</Anchor>
        </Panel>
      </Container.Section>
      <Container.Section title='Anchor underlined'>
        <Panel>
          <Anchor underline>React95 website</Anchor>
        </Panel>
      </Container.Section>
    </Container>
  );
};

export default TypographyExample;
