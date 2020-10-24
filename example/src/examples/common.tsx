import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import themes from '../../../src/common/themes';
import { Text } from '../../../src';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal'
  },
  content: {
    flex: 1,
    padding: 16
  },
  label: {
    color: themes.borderLightest,
    marginBottom: 4
  },
  section: {
    marginBottom: 12
  }
});

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    {children}
  </ScrollView>
);

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => (
  <View style={styles.section}>
    <Text style={styles.label}>{title}</Text>
    {children}
  </View>
);
