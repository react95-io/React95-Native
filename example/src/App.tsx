import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RootNavigator from './RootNavigator';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='RootNavigator' component={RootNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
