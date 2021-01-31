import React from 'react';
import { Panel } from 'react95-native';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
  ScrollView,
} from 'react-native';

type Props = React.ComponentPropsWithRef<typeof Panel> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  disableScroll?: boolean;
  padding?: number;
};

const ExamplePanel = ({
  children,
  style,
  disableScroll = false,
  padding = 16,
}: Props) => (
  <Panel style={[styles.container, style]}>
    {disableScroll ? (
      <View style={{ padding, flex: 1 }}>{children}</View>
    ) : (
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ padding, flex: 1 }}>{children}</View>
      </ScrollView>
    )}
  </Panel>
);

export default ExamplePanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -4,
  },
});
