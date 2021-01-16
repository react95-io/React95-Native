import React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { blockSizes } from '../../styles/styles';

import { Text } from '../..';

type Props = React.ComponentPropsWithRef<typeof View> & {
  left?: React.ReactNode;
  onPress?: () => void;
  right?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
};

const ListItem = ({
  left,
  onPress,
  right,
  style,
  theme,
  title,
  titleStyle,
  ...rest
}: Props) => {
  return (
    <View style={style} {...rest}>
      <TouchableOpacity onPress={onPress} accessibilityRole='button'>
        <View style={[styles.content]}>
          {left && <View style={[styles.left]}>{left}</View>}
          {title && (
            <Text style={[styles.title, { color: theme.progress }, titleStyle]}>
              {title}
            </Text>
          )}
          {right && <View style={[styles.right]}>{right}</View>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: blockSizes.md,
    paddingVertical: 4,
  },
  title: {
    fontSize: 16,
  },
  left: {
    marginRight: 8,
  },
  right: {
    marginLeft: 8,
  },
});

export default withTheme(ListItem);
