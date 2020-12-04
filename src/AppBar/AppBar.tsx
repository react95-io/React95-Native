import React from 'react';
import { StyleProp, StyleSheet, ViewStyle, SafeAreaView } from 'react-native';

import AppBarContent from './AppBarContent';
import AppBarBackAction from './AppBarBackAction';
import Panel from '../Panel';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const AppBar = ({ children, style = {} }: Props) => {
  return (
    <SafeAreaView>
      <Panel style={[styles.wrapper, style]} variant='default'>
        {children}
      </Panel>
    </SafeAreaView>
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

export default AppBar;
