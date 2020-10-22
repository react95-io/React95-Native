import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../src';

import examples from './examples';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listItem: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 18
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#cccccc'
  }
});

const ExamplesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {examples.map(({ title, name }) => (
          <View key={name}>
            <Button
              style={styles.listItem}
              onPress={() => navigation.navigate(name)}
            >
              {title}
            </Button>
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExamplesScreen;
