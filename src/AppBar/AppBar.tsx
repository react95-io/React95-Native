import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import AppBarContent from './AppBarContent';
import AppBarBackAction from './AppBarBackAction';
import Panel from '../Panel';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const AppBar = ({ children, style = {} }: Props) => {
  return (
    <Panel style={[styles.wrapper, style]} variant='default'>
      <AppBarBackAction onPress={() => {}} />
      {/* {children} */}
      <AppBarContent title='Timeline' subtitle='sport' />
    </Panel>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});

AppBar.Content = AppBarContent;

export default AppBar;
