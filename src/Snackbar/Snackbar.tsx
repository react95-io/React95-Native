import React, { useContext } from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
  ImageBackground,
} from 'react-native';
import { ThemeContext } from '../common/theming/Theme';

import SnackbarContent from './SnackbarContent';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const elevation = 8;

const Snackbar = ({ children, style = {} }: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.wrapper, style]}>
      <View
        style={[
          styles.inner,
          {
            marginRight: elevation,
            marginBottom: elevation,
          },
        ]}
      >
        <View
          style={[
            styles.shadow,
            {
              top: elevation,
              left: elevation,
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

export default Snackbar;
