import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { Panel, Button, Text, CloseIcon } from '../..';

type Props = React.ComponentPropsWithRef<typeof View> & {
  // TODO: allow for inserting custom buttons to title bar?
  active?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  onMaximize?: () => void;
  onMinimize?: () => void;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  title?: string;
};

const Window = ({
  active = true,
  children,
  onClose,
  onMaximize,
  onMinimize,
  style = {},
  theme,
  title = '',
  ...rest
}: Props) => {
  return (
    <Panel
      theme={theme}
      variant='raised'
      elevation={4}
      style={[styles.window, { backgroundColor: theme.material }, style]}
      {...rest}
    >
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
            theme={theme}
            bold
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
              <Button
                theme={theme}
                onPress={onMinimize}
                style={[styles.button]}
              >
                _
              </Button>
            )}
            {onMaximize && (
              <Button
                theme={theme}
                onPress={onMaximize}
                style={[styles.button]}
              >
                []
              </Button>
            )}
          </View>
          {onClose && (
            <Button theme={theme} onPress={onClose} style={[styles.button]}>
              <CloseIcon />
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
  },
  titleBar: {
    height: 36,
    margin: 2,
    paddingRight: 4,
    paddingLeft: 8,
  },
  titleBarText: {
    flexShrink: 1,
  },
  buttonGroup: {
    marginRight: 6,
  },
  button: {
    height: 28,
    width: 32,
    padding: 0,
  },
});

export default withTheme(Window);
