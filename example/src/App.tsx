/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { fontNames, Provider, themes } from 'react95-native';
import * as SplashScreen from 'expo-splash-screen';

import MainNavigation from './MainNavigation';

const App = () => {
  const [theme, setTheme] = useState(themes.original);

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
      <Provider theme={theme}>
        <NavigationContainer>
          <MainNavigation setTheme={setTheme} />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
