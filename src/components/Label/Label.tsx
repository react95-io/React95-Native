import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Animated,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';

import { withTheme } from '../../core/theming';
import shadow from '../../styles/shadow';
import type { Theme } from '../../types';

import { Text } from '../..';

type Props = React.ComponentPropsWithRef<typeof View> & {
  accessible?: boolean;
  children?: React.ReactNode;
  elevation?: number;
  onLongPress?: () => void;
  onPress?: () => void;
  radius?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

const Label = ({
  accessible,
  children,
  elevation = 0,
  onLongPress,
  onPress,
  radius = 4,
  style = {},
  theme,
  ...rest
}: Props) => {
  return (
    // TODO: fix this TS error
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Animated.View
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor: theme.tooltip,
          borderRadius: radius,
        },
        shadow(elevation),
        style,
      ]}
    >
      <TouchableWithoutFeedback
        delayPressIn={0}
        disabled={!(onPress || onLongPress)}
        onLongPress={onLongPress}
        onPress={onPress}
        accessible={accessible}
      >
        <Text>{children}</Text>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

export default withTheme(Label);
