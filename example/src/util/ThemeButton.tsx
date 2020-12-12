import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import {
  Text,
} from 'react95-native';

type Props = {
    onPress: () => {},
    selected?: boolean,
    theme: any
}

const ThemeButton = ({ theme, selected, onPress }: Props) => (
  <View style={[styles.themeButtonWrapper]}>
    <TouchableHighlight onPress={onPress} style={[styles.button, {
        borderColor: selected ? theme.borderDarkest : 'transparent',
    }]}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: theme.material,
            
          },
        ]}
      />
    </TouchableHighlight>
    <Text bold={selected} numberOfLines={1} style={[styles.themeButtonName]}>
      {theme.name}
    </Text>
  </View>
);

const buttonSize = 60;
const selectedBorderWidth = 3;

const styles = StyleSheet.create({

  themeButtonWrapper: {
    alignItems: 'center',
    width: buttonSize + 16
  },
  button: {
    borderRadius: buttonSize/2 + selectedBorderWidth,
    marginBottom: 5,
    borderWidth: selectedBorderWidth,
  },
  circle: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize/2,
  },
  // TODO: truncate text, make every item of fixed width
  themeButtonName: {
    fontSize: 11,
    // flex: 1,
    width: '100%',
    textAlign: 'center'
  },
});

export default ThemeButton;
