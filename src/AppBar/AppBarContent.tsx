/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import type { $RemoveChildren } from '../types';

import { Text } from '..';

type Props = $RemoveChildren<typeof View> & {
  color?: string;
  title: React.ReactNode;
  titleRef?: React.RefObject<Text>;
  titleStyle?: StyleProp<TextStyle>;
  //   TODO: titleRef
  //   titleRef?: React.RefObject<Text>;
  subtitle?: React.ReactNode;
  subtitleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const AppbarContent = ({
  color: titleColor,
  subtitle,
  subtitleStyle,
  onPress,
  style,
  titleStyle,
  title,
  // titleRef,
  ...rest
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={!onPress}>
      <View style={[styles.container, style]} {...rest}>
        <Text
          // ref={titleRef}
          style={[
            {
              color: titleColor,
            },
            styles.title,
            titleStyle,
          ]}
          accessibilityTraits='header'
        >
          {title}
        </Text>
        {subtitle ? (
          <Text secondary style={[styles.subtitle, subtitleStyle]}>
            {subtitle}
          </Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

AppbarContent.displayName = 'Appbar.Content';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
  },
});

export default AppbarContent;
