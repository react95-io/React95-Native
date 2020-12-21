import React from 'react';
import { Panel, Text, Title, Anchor } from 'react95-native';

import Container from '../util/Container';

const TypographyExample = () => {
  return (
    <Container>
      <Container.Section title='Text'>
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
      <Container.Section title='Secondary'>
        <Panel>
          <Text secondary>Disabled</Text>
        </Panel>
      </Container.Section>

      <Container.Section title='Default'>
        <Panel style={{ width: '100%', padding: 20 }}>
          <Title>Title</Title>
        </Panel>
      </Container.Section>
      <Container.Section title='Bold'>
        <Panel style={{ width: '100%', padding: 20 }}>
          <Title bold align='left'>
            Bold title
          </Title>
        </Panel>
      </Container.Section>
      <Container.Section title='Disabled'>
        <Panel style={{ width: '100%', padding: 20 }}>
          <Title disabled align='right'>
            Disabled title
          </Title>
        </Panel>
      </Container.Section>
      <Container.Section title='Secondary'>
        <Panel style={{ width: '100%', padding: 20 }}>
          <Title secondary>Secondary title</Title>
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
