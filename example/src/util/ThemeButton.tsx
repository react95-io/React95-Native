import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { Text, Panel, ThemeProvider, Theme } from 'react95-native';

type Props = {
  onPress: () => void;
  selected?: boolean;
  theme: Theme;
  currentTheme: Theme;
};

const ThemeButton = ({ theme, currentTheme, selected, onPress }: Props) => (
  <View style={[styles.themeButtonWrapper]}>
    <ThemeProvider theme={currentTheme}>
      <TouchableHighlight
        onPress={onPress}
        style={[
          styles.button,
          {
            borderColor: selected ? theme.focusSecondary : 'transparent',
          },
        ]}
      >
        <Panel theme={theme} variant='raised' style={[styles.square]}>
          <View
            style={[styles.header, { backgroundColor: theme.headerBackground }]}
          />
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
      </TouchableHighlight>
      <Text bold={selected} numberOfLines={1} style={[styles.themeButtonName]}>
        {theme.name}
      </Text>
    </ThemeProvider>
  </View>
);

const buttonHeight = 50;
const buttonWidth = 76;
const selectedBorderWidth = 2;

const styles = StyleSheet.create({
  themeButtonWrapper: {
    alignItems: 'center',
    width: buttonWidth + 16,
    marginLeft: 4,
  },
  button: {
    marginBottom: 5,
    borderWidth: selectedBorderWidth,
    padding: 4,
  },
  square: {
    height: buttonHeight,
    width: buttonWidth,
  },
  header: {
    position: 'absolute',
    height: 10,
    left: 4,
    top: 4,
    right: 4,
  },
  themeButtonName: {
    fontSize: 11,
    width: '100%',
    textAlign: 'center',
  },
});

export default ThemeButton;
