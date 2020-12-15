import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import type { $RemoveChildren } from '../types';
import { ThemeContext } from '../common/theming/Theme';

import { Button } from '..';

type Props = $RemoveChildren<typeof Button>;

const AppBarBackAction = ({ ...rest }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Button square variant='menu' {...rest}>
      <View style={[styles.icon, { borderColor: theme.materialText }]} />
    </Button>
  );
};

export default AppBarBackAction;

const styles = StyleSheet.create({
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
