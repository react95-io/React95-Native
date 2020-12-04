import React from 'react';
import { View } from 'react-native';
import { AppBar, Text, Button } from 'react95-native';

const AppBarExample = () => {
  return (
    <View style={{ backgroundColor: 'teal', flex: 1 }}>
      <AppBar style={{ padding: 2 }}>
        <AppBar.BackAction onPress={() => {}} />
        <AppBar.Content title='Timeline' subtitle='sport' />
      </AppBar>
    </View>
  );
};

export default AppBarExample;
