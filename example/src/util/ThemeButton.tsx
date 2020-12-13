import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { Text, Panel } from 'react95-native';

type Props = {
  onPress: () => {};
  selected?: boolean;
  theme: any;
};

const ThemeButton = ({ theme, selected, onPress }: Props) => (
  <View style={[styles.themeButtonWrapper]}>
    <TouchableHighlight
      onPress={onPress}
      style={[
        styles.button,
        {
          borderColor: selected ? theme.focusSecondary : 'transparent',
        },
      ]}
    >
      {
        <Panel style={[styles.square]}>
          {selected && (
            <ImageBackground
              style={{ width: '100%', height: '100%' }}
              imageStyle={{
                resizeMode: 'repeat',
              }}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIUlEQVQoU2P8////fwYkwMjIyIjCp4MCZPtAbAwraa8AAEGrH/nfAIhgAAAAAElFTkSuQmCC',
              }}
            />
          )}
        </Panel>
      }
    </TouchableHighlight>
    <Text bold={selected} numberOfLines={1} style={[styles.themeButtonName]}>
      {theme.name}
    </Text>
  </View>
);

const buttonSize = 50;
const selectedBorderWidth = 2;

const styles = StyleSheet.create({
  themeButtonWrapper: {
    alignItems: 'center',
    width: buttonSize + 16,
    marginLeft: 4,
  },
  button: {
    marginBottom: 5,
    borderWidth: selectedBorderWidth,
    padding: 4,
  },
  square: {
    height: buttonSize,
    width: buttonSize,
  },
  themeButtonName: {
    fontSize: 11,
    width: '100%',
    textAlign: 'center',
  },
});

export default ThemeButton;
