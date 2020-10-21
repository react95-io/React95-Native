import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../src';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.openDrawer()}>Open drawer</Button>
    </View>
  );
};

export default HomeScreen;
