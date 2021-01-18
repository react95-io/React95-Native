import React from 'react';
import { View } from 'react-native';
import { AppBar } from 'react95-native';

const AppBarExample = () => {
  return (
    <View style={{ backgroundColor: 'teal', flex: 1 }}>
      <AppBar>
        <AppBar.BackAction onPress={() => {}} />
        <AppBar.Content title='Timeline' subtitle='sport' />
      </AppBar>
    </View>
  );
};

export default AppBarExample;
