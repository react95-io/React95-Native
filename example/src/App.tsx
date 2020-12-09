import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { LocalThemeProvider } from './util/LocalThemeContext';
import MainNavigation from './MainNavigation';

const App = () => {
  return (
    <LocalThemeProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </LocalThemeProvider>
  );
};

export default App;
