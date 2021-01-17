import React from 'react';
import { Label } from 'react95-native';

import Container from '../util/Container';

const PanelExample = () => {
  return (
    <Container>
      <Label elevation={0}>No elevation</Label>
      <Label elevation={6} style={{ marginTop: 16 }} onPress={() => {}}>
        High elevation
      </Label>
    </Container>
  );
};

export default PanelExample;
