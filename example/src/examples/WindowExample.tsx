import React from 'react';
import { View } from 'react-native';
import { Window, Text } from 'react95-native';

const onClose = () => console.warn('onClose');
const onMinimize = () => console.warn('onMinimize');
const onMaximize = () => console.warn('onMaximize');

const AppBarExample = () => {
  return (
    <View style={{ backgroundColor: 'teal', flex: 1, padding: 2 }}>
      <Window
        title='Window.exe'
        onClose={onClose}
        onMinimize={onMinimize}
        onMaximize={onMaximize}
        style={[{ width: '100%', height: 120 }]}
      >
        <Text disabled>This is a Window</Text>
      </Window>

      <Window
        title='Not active.exe'
        active={false}
        onClose={onClose}
        onMinimize={onMinimize}
        onMaximize={onMaximize}
        style={[{ width: 200, marginTop: 30 }]}
      >
        <Text disabled>This window is inactive</Text>
      </Window>
    </View>
  );
};

export default AppBarExample;
