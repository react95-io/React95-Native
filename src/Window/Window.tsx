import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';

import { original as theme } from '../common/themes';

import { Panel, Button } from '..';

type WindowProps = {
  children?: React.ReactNode;
  title?: string;
  // TODO: allow for inserting custom buttons to title bar?
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Window = ({
  children,
  active = true,
  onClose,
  onMinimize,
  onMaximize,
  title = '',
  style = {},
}: WindowProps) => {
  return (
    <Panel variant='outside' style={[styles.window, style]}>
      <View
        style={[
          styles.titleBar,
          styles.flex,
          {
            backgroundColor: active
              ? theme.headerBackground
              : theme.headerNotActiveBackground,
          },
        ]}
      >
        <View style={[styles.flex]}>
          <Text
            // TODO: truncate window title when window is really small
            ellipsizeMode='tail'
            numberOfLines={1}
            style={[
              styles.titleBarText,
              { color: active ? theme.headerText : theme.headerNotActiveText },
            ]}
          >
            {title}
          </Text>
        </View>

        <View style={[styles.flex]}>
          <View style={[styles.flex, styles.buttonGroup]}>
            {onMinimize && (
              <Button onPress={onMinimize} style={[styles.button]}>
                _
              </Button>
            )}
            {onMaximize && (
              <Button onPress={onMaximize} style={[styles.button]}>
                []
              </Button>
            )}
          </View>
          {onClose && (
            <Button onPress={onClose} style={[styles.button]}>
              X
            </Button>
          )}
        </View>
      </View>
      {children}
    </Panel>
  );
};

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },

  window: {
    position: 'relative',
    paddingVertical: 6,
    paddingHorizontal: 6,
    backgroundColor: theme.material,
  },

  titleBar: {
    height: 33,
    margin: 2,
    paddingLeft: 4,
    paddingRight: 2,
  },

  titleBarText: {
    // TODO: make 16 px font default everywhere
    fontSize: 16,
    fontWeight: 'bold',
    flexShrink: 1,
  },

  buttonGroup: {
    marginRight: 6,
  },

  button: {
    height: 27,
    width: 31,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

export default Window;
