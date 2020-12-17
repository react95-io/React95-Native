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
    <View style={[styles.container, style]} {...rest}>
      <TouchableWithoutFeedback onPress={onPress} disabled={!onPress}>
        <View>
          <Text
            // ref={titleRef}
            style={[styles.title, titleStyle]}
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
    </View>
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
