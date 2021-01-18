/* eslint-disable no-console */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Window, Text } from 'react95-native';
import { notificationService } from '../util/notifications';

const onClose = () => notificationService.send({ message: 'onClose' });
const onMinimize = () => notificationService.send({ message: 'onMinimize' });
const onMaximize = () => notificationService.send({ message: 'onMaximize' });

const AppBarExample = () => {
  return (
    <View style={{ backgroundColor: 'teal', flex: 1, padding: 16 }}>
      <Window
        title='Window.exe'
        onClose={onClose}
        onMinimize={onMinimize}
        onMaximize={onMaximize}
        style={styles.window}
      >
        <View style={styles.windowContent}>
          <Text>This is a Window</Text>
        </View>
      </Window>

      <Window
        title='Not active.exe'
        active={false}
        onClose={onClose}
        onMinimize={onMinimize}
        onMaximize={onMaximize}
        style={[
          styles.window,
          {
            marginTop: 16,
            // TODO: truncate title text with ellipsis on small widths
            // width: 200
          },
        ]}
      >
        <View style={styles.windowContent}>
          <Text>This window is inactive</Text>
        </View>
      </Window>
    </View>
  );
};

export default AppBarExample;

const styles = StyleSheet.create({
  window: {
    width: '100%',
    height: 120,
  },
  windowContent: {
    padding: 8,
  },
});
