import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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
      <Stack.Navigator headerMode='screen'>
        <Stack.Screen
          name='Home'
          component={ExamplesScreen}
          options={{ title: 'Examples' }}
        />
        {examples.map(({ name, title, component }) => (
          <Stack.Screen
            key={name}
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
