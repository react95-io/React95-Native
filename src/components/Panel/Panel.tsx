import React, { useContext } from 'react';
import { StyleProp, StyleSheet, Animated, View, ViewStyle } from 'react-native';

import { ThemeContext } from '../../styles/theming/Theme';
import { Border } from '../../styles/styleElements';
import shadow from '../../styles/shadow';

export const testId = 'panel';

// TODO: common interface with styleElements/Border ?
type Props = React.ComponentPropsWithRef<typeof View> & {
  children?: React.ReactNode;
  variant?: 'default' | 'well' | 'raised' | 'clear' | 'cutout';
  style?: StyleProp<ViewStyle>;
  radius?: number;
  elevation?: number;
  invert?: boolean;
  background?: 'material' | 'canvas' | 'materialDark';
};

const Panel = ({
  children,
  variant = 'default',
  style = {},
  radius = 0,
  elevation = 0,
  background = 'material',
  invert = false,
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

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
        <Border variant={variant} radius={radius} invert={invert} />
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

export default Panel;
