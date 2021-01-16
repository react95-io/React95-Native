import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppBar } from 'react95-native';
import type { Theme } from 'react95-native';
import ExamplesScreen from './ExamplesScreen';
import examples from './examples';

const flattenedExamples = examples.map(section => section.items).flat();

const Stack = createStackNavigator();

type Props = {
  setTheme: (theme: Theme) => void;
};

const MainNavigation = (props: Props) => {
  return (
    <>
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
        <Stack.Screen name='Home' options={{ title: 'Examples' }}>
          {() => <ExamplesScreen {...props} />}
        </Stack.Screen>
        {flattenedExamples.map(({ name, title, component }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{ title }}
          />
        ))}
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;
