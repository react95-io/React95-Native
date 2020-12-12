import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollPanel } from 'react95-native';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const ScrollPanelExample = () => {

  const colors = new Array(16).fill(null).map(getRandomColor);

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
