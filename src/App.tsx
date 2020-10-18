import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
          <View>
            <Text>React95</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
