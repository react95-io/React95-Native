import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import { AppBar } from 'react95-native';

import ExamplesScreen from './ExamplesScreen';
import examples from './examples';

type RootStackParamList = {
  Home: undefined;
  ButtonExample: undefined;
  TextInputExample: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='screen'
        screenOptions={{
          header: ({ navigation, scene, previous }) => (
            <AppBar>
              {previous ? (
                <AppBar.BackAction onPress={() => navigation.goBack()} />
              ) : (navigation as any).openDrawer ? (
                <AppBar.BackAction
                  onPress={() =>
                    ((navigation as any) as DrawerNavigationProp<{}>).openDrawer()
                  }
                />
              ) : null}
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
        {examples.map(({ name, title, component }) => (
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
  );
};

export default App;
