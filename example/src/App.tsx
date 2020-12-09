import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { AppBar, ThemeProvider, original } from 'react95-native';

import ExamplesScreen from './ExamplesScreen';
import examples from './examples';

const flattenedExamples = examples
  .map(group => group.sections.map(section => section.items))
  .flat(2);

type RootStackParamList = {
  Home: undefined;
  ButtonExample: undefined;
  TextInputExample: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider theme={original}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode='screen'
          screenOptions={{
            header: ({ navigation, scene, previous }) => (
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
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
