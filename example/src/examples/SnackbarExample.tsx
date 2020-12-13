import React, { useContext } from 'react';
import { Snackbar, Text } from 'react95-native';

import Container from '../util/Container';
import { LocalThemeContext } from '../util/LocalThemeContext';

const SnackbarExample = () => {
  const { theme } = useContext(LocalThemeContext);
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
