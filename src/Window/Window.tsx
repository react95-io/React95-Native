import React, { useContext } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

import { ThemeContext } from '../common/theming/Theme';

import { Panel, Button, Text, CloseIcon } from '..';

type Props = React.ComponentPropsWithRef<typeof View> & {
  // TODO: allow for inserting custom buttons to title bar?
  active?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  onMaximize?: () => void;
  onMinimize?: () => void;
  style?: StyleProp<ViewStyle>;
  title?: string;
};

const Window = ({
  active = true,
  children,
  onClose,
  onMaximize,
  onMinimize,
  style = {},
  title = '',
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Panel
      variant='outside'
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
    paddingHorizontal: 4,
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
    height: 28,
    width: 32,
    padding: 0,
  },
});

export default Window;
