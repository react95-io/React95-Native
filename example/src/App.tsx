/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { fontNames } from 'react95-native';
import * as SplashScreen from 'expo-splash-screen';

import { LocalThemeProvider } from './util/LocalThemeContext';
import MainNavigation from './MainNavigation';

const App = () => {
  const [fontLoaded] = useFonts({
    [fontNames.normal]: require('./assets/fonts/MS-Sans-Serif.ttf'),
    [fontNames.bold]: require('./assets/fonts/MS-Sans-Serif-Bold.ttf'),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
      return;
    }

    SplashScreen.preventAutoHideAsync();
  }, [fontLoaded]);

  if (!fontLoaded) {
    /* Renders an empty view to avoid errors while the splash screen is visible */
    return <View />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <LocalThemeProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </LocalThemeProvider>
    </SafeAreaView>
  );
};

export default App;
