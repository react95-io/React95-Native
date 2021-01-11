import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { themes, Text } from 'react95-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  label: {
    color: themes.original.borderDarkest,
    marginBottom: 8,
  },
  section: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
  },
});

type ContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Container = ({ children, style }: ContainerProps) => (
  <ScrollView
    style={[styles.container, style]}
    contentContainerStyle={styles.content}
  >
    {children}
  </ScrollView>
);

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <View>
    <Text style={styles.label}>{title}</Text>
    <View style={styles.section}>{children}</View>
  </View>
);

Container.Section = Section;

export default Container;
