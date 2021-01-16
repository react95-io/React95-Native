import React from 'react';
import { StyleProp, StyleSheet, Animated, View, ViewStyle } from 'react-native';

import { withTheme } from '../../core/theming';
import { Border } from '../../styles/styleElements';
import shadow from '../../styles/shadow';
import type { Theme } from '../../types';

export const testId = 'panel';

// TODO: common interface with styleElements/Border ?
type Props = React.ComponentPropsWithRef<typeof View> & {
  background?: 'material' | 'canvas' | 'materialDark';
  children?: React.ReactNode;
  elevation?: number;
  invert?: boolean;
  radius?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  variant?: 'default' | 'well' | 'raised' | 'clear' | 'cutout';
};

const Panel = ({
  background = 'material',
  children,
  elevation = 0,
  invert = false,
  radius = 0,
  style = {},
  theme,
  variant = 'default',
  ...rest
}: Props) => {
  const getBackgroundColor = () => {
    return theme[background];
  };

  return (
    // TODO: fix this TS error
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Animated.View
      {...rest}
      style={[
        styles.container,
        {
          padding: variant === 'well' ? 2 : 4,
          backgroundColor: getBackgroundColor(),
          borderRadius: radius,
        },
        shadow(elevation),
        style,
      ]}
      testID={testId}
    >
      {variant !== 'clear' && (
        <Border
          theme={theme}
          variant={variant}
          radius={radius}
          invert={invert}
        />
      )}
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});

export default withTheme(Panel);
