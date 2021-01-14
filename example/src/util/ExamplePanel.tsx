import React from 'react';

import { Panel } from 'react95-native';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

type Props = React.ComponentPropsWithRef<typeof Panel> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const ExamplePanel = ({ children, style }: Props) => (
  <Panel style={[styles.container, style]}>{children}</Panel>
);

export default ExamplePanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -4,
    // TODO: make Panel compensate for borders
    padding: 20,
  },
});
