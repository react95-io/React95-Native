import React, { useContext } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { Border } from '../common/styleElements';
import { ThemeContext } from '../common/theming/Theme';

export const testId = 'cutout';

type Props = React.ComponentPropsWithRef<typeof View> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  background?: 'material' | 'canvas' | 'materialDark';
};

const Cutout = ({
  children,
  background = 'canvas',
  style = {},
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);
  const getBackgroundColor = () => {
    return theme[background];
  };
  return (
    <View
      style={[styles.wrapper, { backgroundColor: getBackgroundColor() }, style]}
      testID={testId}
      {...rest}
    >
      <Border variant='cutout' />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    // to compensate for borders
    padding: 4,
  },
});

export default Cutout;
