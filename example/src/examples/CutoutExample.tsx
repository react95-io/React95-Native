import React from 'react';
import { Cutout, Text, Window } from 'react95-native';

import Container from '../util/Container';

const CutoutExample = () => {
  return (
    <Container>
      <Container.Section title='Usage:'>
        <Window style={{ padding: 12 }}>
          <Cutout style={{ height: 120 }}>
            <Text>
              React95 React95 React95 React95 React95 React95 React95 React95
              React95 React95
            </Text>
            <Text>
              React95 React95 React95 React95 React95 React95 React95 React95
              React95 React95
            </Text>
            <Text>
              React95 React95 React95 React95 React95 React95 React95 React95
              React95 React95
            </Text>
            <Text>
              React95 React95 React95 React95 React95 React95 React95 React95
              React95 React95
            </Text>
          </Cutout>
        </Window>
      </Container.Section>
    </Container>
  );
};

export default CutoutExample;
