/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Hourglass, fontNames } from 'react95-native';

import { LocalThemeProvider } from './util/LocalThemeContext';
import MainNavigation from './MainNavigation';

const App = () => {
  const [fontLoaded] = useFonts({
    [fontNames.normal]: require('./assets/fonts/MS-Sans-Serif.ttf'),
    [fontNames.bold]: require('./assets/fonts/MS-Sans-Serif-Bold.ttf'),
  });

  if (!fontLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'teal',
        }}
      >
        <Hourglass size={60} />
      </View>
    );
  }

  return (
    <LocalThemeProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </LocalThemeProvider>
  );
};

export default App;
