import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { Divider } from '../..';
import Text, { TextProps } from './Text';

type Props = TextProps & {
  align?: 'center' | 'left' | 'right';
  theme: Theme;
};

const Title = ({ align = 'center', children, theme, ...rest }: Props) => {
  const getAlignment = () => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'center';
    }
  };

  return (
    <View style={[styles.wrapper]}>
      <Divider style={[styles.divider]} />
      <View
        style={{
          paddingLeft: align !== 'left' ? 8 : 0,
          paddingRight: align !== 'right' ? 8 : 0,
          backgroundColor: theme.material,
          alignSelf: getAlignment(),
        }}
      >
        <Text {...rest}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
  },
  divider: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    transform: [{ translateY: -1 }],
  },
});

export default withTheme(Title);
