import React from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';

import {Button} from 'react95-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Button />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
