import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import { border } from '../common/styles';
import { original as theme } from '../common/themes';

export const testId = 'cutout';

type Props = {
  children: React.ReactNode;
  // shadow?: boolean;
  style?: Object;
};

const Cutout = ({ children, style = {} }: Props) => {
  return (
    <ScrollView style={[styles.container, style]} testID={testId}>
      <View style={styles.beforeContainer}>
        <View style={styles.content}>{children}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...border.wellInverted,
    backgroundColor: theme.material,
    padding: 2,
    borderStyle: 'solid',
    lineHeight: 1.5
  },
  beforeContainer: {
    borderStyle: 'solid',
    borderWidth: 2,
    margin: -2,
    borderLeftColor: theme.borderDarkest,
    borderTopColor: theme.borderDarkest,
    borderRightColor: theme.borderLight,
    borderBottomColor: theme.borderLight
    // ${props => props.shadow && `box-shadow:${insetShadow};`}
  },
  content: {
    width: '100%',
    padding: 4
  }
});

export default Cutout;
