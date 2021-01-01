import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollPanel } from 'react95-native';

const colors = [
  'white',
  'black',
  '#bdbebd',
  '#7a7d7b',
  '#ff0102',
  '#7c0000',
  '#feff00',
  '#7c7d04',
  '#00ff00',
  '#077d04',
  '#0afeff',
  '#067d7b',
  '#1402ff',
  '#05007b',
  '#ff01ff',
  '#7a037b',
  '#cdaeb4',
  '#9b5d6a',
  '#e5d6de',
  '#9c9d9d',
];

const ScrollPanelExample = () => {
  return (
    <View style={{ backgroundColor: 'teal', flex: 1 }}>
      <ScrollPanel>
        {colors.map((color, i) => (
          <View key={i} style={[styles.item, { backgroundColor: color }]} />
        ))}
      </ScrollPanel>
      <ScrollPanel noBackground>
        {colors.map((color, i) => (
          <View key={i} style={[styles.item, { backgroundColor: color }]} />
        ))}
      </ScrollPanel>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 60,
    width: 60,
    borderRadius: 20,
    backgroundColor: 'teal',
    marginHorizontal: 8,
  },
});

export default ScrollPanelExample;
