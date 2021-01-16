import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, useTheme } from 'react95-native';

import Container from '../util/Container';

const CardExample = () => {
  const theme = useTheme();
  return (
    <ScrollView
      style={[
        {
          backgroundColor: theme.materialDark,
          padding: 16,
        },
      ]}
    >
      <Container.Section title='Default:'>
        <Card style={[{ height: 300 }]}>
          <Card.Content>
            <Text>Simple text</Text>
          </Card.Content>
        </Card>
      </Container.Section>

      <Container.Section title='High elevation:'>
        <Card elevation={4} style={[{ height: 100 }]}>
          <Card.Content>
            <Text>Simple text</Text>
          </Card.Content>
        </Card>
      </Container.Section>

      <Container.Section title='No elevation:'>
        <Card elevation={0} style={[{ height: 100, marginBottom: 32 }]}>
          <Card.Content>
            <Text>Simple text</Text>
          </Card.Content>
        </Card>
      </Container.Section>
    </ScrollView>
  );
};

export default CardExample;
