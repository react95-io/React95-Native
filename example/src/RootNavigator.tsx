import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode='screen'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'React95' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
