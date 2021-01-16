import React from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
  ImageBackground,
} from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import SnackbarContent from './SnackbarContent';

type Props = React.ComponentPropsWithRef<typeof View> & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

const shadowOffset = 8;

const Snackbar = ({ children, style = {}, theme, ...rest }: Props) => {
  return (
    <View style={[styles.wrapper, style]} {...rest}>
      <View
        style={[
          styles.inner,
          {
            marginRight: shadowOffset,
            marginBottom: shadowOffset,
          },
        ]}
      >
        <View
          style={[
            styles.shadow,
            {
              top: shadowOffset,
              left: shadowOffset,
              width: '100%',
              height: '100%',
            },
          ]}
        >
          <ImageBackground
            style={[{ width: '100%', height: '100%' }]}
            imageStyle={{
              resizeMode: 'repeat',
            }}
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQoU2NkYGD4z4AKGJG5IA4dFKA5AdVKFAdBVaK4iXIFAEiuCAWq9MdHAAAAAElFTkSuQmCC',
            }}
          />
        </View>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.tooltip,
              borderColor: theme.borderDarkest,
            },
          ]}
        >
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  inner: {
    flexGrow: 1,
  },
  card: {
    borderWidth: 2,
    flexGrow: 1,
  },
  shadow: {
    position: 'absolute',
  },
});

Snackbar.Content = SnackbarContent;

export default withTheme(Snackbar);
