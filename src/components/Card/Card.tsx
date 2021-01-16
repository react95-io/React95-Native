import React from 'react';
import { StyleProp, StyleSheet, ViewStyle, View } from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import CardContent from './CardContent';

// TODO: add following props:
// onLongPress,
// onPress,

type Props = React.ComponentPropsWithRef<typeof View> & {
  children?: React.ReactNode;
  elevation?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

const Card = ({
  children,
  elevation: elevationProp = 1,
  style = {},
  theme,
  ...rest
}: Props) => {
  const elevation = elevationProp * 2;
  return (
    <View style={[styles.wrapper, style]} {...rest}>
      <View
        style={[
          styles.inner,
          {
            marginRight: elevation,
            marginBottom: elevation,
          },
        ]}
      >
        {elevation !== 0 && (
          <View
            style={[
              styles.shadow,
              {
                top: elevation,
                left: elevation,
                width: '100%',
                height: '100%',
                backgroundColor: theme.borderDarkest,
              },
            ]}
          />
        )}
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.canvas,
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

Card.Content = CardContent;

export default withTheme(Card);
