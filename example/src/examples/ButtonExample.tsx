import React from 'react';

import { Container } from './common';

import { Button } from '../../../src';

const ButtonExample = () => {
  return (
    <Container>
      <Button onPress={() => console.warn('Pressed')}>Example</Button>
    </Container>
  );
};

export default ButtonExample;
