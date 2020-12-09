import React, { useContext } from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';

import { Button } from '..';
import { ThemeContext } from '../common/theming/Theme';

type Props = {
  disabled?: boolean;
  accessibilityLabel?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const AppBarBackAction = ({ accessibilityLabel = 'Back', ...rest }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Button
      square
      variant='menu'
      accessibilityLabel={accessibilityLabel}
      {...rest}
    >
      <View style={[styles.icon, { borderColor: theme.materialText }]} />
    </Button>
  );
};

export default AppBarBackAction;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },

  icon: {
    position: 'relative',
    height: 13,
    width: 13,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    transform: [
      {
        rotate: '-45deg',
      },
      { translateY: 4 },
    ],
  },
});
