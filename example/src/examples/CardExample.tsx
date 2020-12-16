import React, { useContext } from 'react';
import { Card, Text } from 'react95-native';

import Container from '../util/Container';
import { LocalThemeContext } from '../util/LocalThemeContext';

const CardExample = () => {
  const { theme } = useContext(LocalThemeContext);
  return (
    <Container style={[{ backgroundColor: theme.materialDark }]}>
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
        <Card elevation={0} style={[{ height: 100 }]}>
          <Card.Content>
            <Text>React95</Text>
          </Card.Content>
        </Card>
      </Container.Section>
    </Container>
  );
};

export default CardExample;
