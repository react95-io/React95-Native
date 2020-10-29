import React from 'react';
import { View } from 'react-native';
import { AppBar, Text, Button } from 'react95-native';

const AppBarExample = () => {
  return (
    <View style={{ backgroundColor: 'teal', flex: 1 }}>
      <AppBar style={{ padding: 2 }}>
        <Button
          square
          onPress={() => console.warn('Pressed')}
          style={{ justifyContent: 'center' }}
        >
          Yo
        </Button>
        <Text style={{ marginLeft: 8 }}>This is an AppBar</Text>
      </AppBar>
    </View>
  );
};

export default AppBarExample;
