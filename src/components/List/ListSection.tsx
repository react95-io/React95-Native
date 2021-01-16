import * as React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { Text } from '../..';

type Props = React.ComponentPropsWithRef<typeof View> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
};

const ListSection = ({
  children,
  style,
  theme,
  title,
  titleStyle,
  ...rest
}: Props) => (
  <View {...rest} style={[styles.container, style]}>
    {title && (
      <Text theme={theme} bold secondary style={[styles.title, titleStyle]}>
        {title}
      </Text>
    )}
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    fontSize: 13,
    marginVertical: 8,
  },
});

export default withTheme(ListSection);
