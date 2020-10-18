import React from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>React95 Example</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
