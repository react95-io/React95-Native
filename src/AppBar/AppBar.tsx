import React from 'react';
import { StyleSheet } from 'react-native';

import Panel from '../Panel';

type Props = {
  children: React.ReactNode;
  style?: Object;
};

const AppBar = ({ children, style = {} }: Props) => {
  return (
    <Panel style={[styles.container, style]} variant='default'>
      {children}
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AppBar;
