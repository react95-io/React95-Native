import React from 'react';

import { Container } from './common';

import { TextInput } from '../../../src';

const TextInputExample = () => {
  return (
    <Container>
      <TextInput
        value=''
        placeholder='toDo: Implement text input component...'
      />
    </Container>
  );
};

export default TextInputExample;
