import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal'
  },
  content: {
    flex: 1,
    padding: 16
  }
});

type ContainerProps = {
  children: React.ReactNode;
};

/* eslint-disable import/prefer-default-export */
export const Container = ({ children }: ContainerProps) => (
  <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    {children}
  </ScrollView>
);
