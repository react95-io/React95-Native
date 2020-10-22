import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  }
});

type ContainerProps = {
  children: React.ReactNode;
};

/* eslint-disable import/prefer-default-export */
export const Container = ({ children }: ContainerProps) => (
  <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
);
