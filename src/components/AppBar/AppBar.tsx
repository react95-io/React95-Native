import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import AppBarContent from './AppBarContent';
import AppBarBackAction from './AppBarBackAction';
import Panel from '../Panel';

type Props = React.ComponentPropsWithRef<typeof View> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

const AppBar = ({ children, style = {}, ...rest }: Props) => {
  return (
    <Panel
      style={[styles.wrapper, style]}
      variant='raised'
      elevation={2}
      {...rest}
    >
      {children}
    </Panel>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});

AppBar.Content = AppBarContent;
AppBar.BackAction = AppBarBackAction;

export default withTheme(AppBar);
