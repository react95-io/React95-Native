import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppBar, ThemeProvider as React95Provider } from 'react95-native';

import { LocalThemeContext } from './util/LocalThemeContext';
import ExamplesScreen from './ExamplesScreen';
import examples from './examples';

const flattenedExamples = examples.map(section => section.items).flat();

type RootStackParamList = {
  Home: undefined;
  ButtonExample: undefined;
  TextInputExample: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  const { theme } = useContext(LocalThemeContext);

  return (
    <React95Provider theme={theme}>
      <Stack.Navigator
        headerMode='screen'
        screenOptions={{
          header: ({ navigation, scene, previous }) =>
            scene.descriptor.options.title !== 'Examples' && (
              <AppBar>
                {previous && (
                  <AppBar.BackAction onPress={() => navigation.goBack()} />
                )}
                <AppBar.Content title={scene.descriptor.options.title} />
              </AppBar>
            ),
        }}
      >
        <Stack.Screen
          name='Home'
          component={ExamplesScreen}
          options={{ title: 'Examples' }}
        />
        {flattenedExamples.map(({ name, title, component }) => (
          <Stack.Screen
            key={name}
            /* @ts-ignore */
            name={name}
            component={component}
            options={{ title }}
          />
        ))}
      </Stack.Navigator>
    </React95Provider>
  );
};

export default MainNavigation;
