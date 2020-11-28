import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react95-native';

import examples from './examples';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  listItem: {
    height: 40,
    paddingHorizontal: 18,
  },
});

const ExamplesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {examples.map(({ title, name }) => (
          <Button
            fullWidth
            key={name}
            style={styles.listItem}
            onPress={() => navigation.navigate(name)}
          >
            {title}
          </Button>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExamplesScreen;
