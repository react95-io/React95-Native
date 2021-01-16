import React from 'react';
import { Snackbar, Text, useTheme } from 'react95-native';

import Container from '../util/Container';

const SnackbarExample = () => {
  const theme = useTheme();
  return (
    <Container style={[{ backgroundColor: theme.materialDark }]}>
      <Container.Section title='Default:'>
        <Snackbar style={[{ height: 80 }]}>
          <Snackbar.Content>
            <Text>Display some information here.</Text>
          </Snackbar.Content>
        </Snackbar>
      </Container.Section>
    </Container>
  );
};

export default SnackbarExample;
