import React from 'react';
import { TextInput } from 'react95-native';

import Container from '../util/Container';

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
