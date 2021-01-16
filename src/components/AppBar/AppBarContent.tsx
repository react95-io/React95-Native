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

import type { Theme, $RemoveChildren } from '../../types';
import { withTheme } from '../../core/theming';

import { Text } from '../..';

type Props = $RemoveChildren<typeof View> & {
  //   titleRef?: React.RefObject<Text>;
  //   TODO: titleRef
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  subtitle?: React.ReactNode;
  subtitleStyle?: StyleProp<TextStyle>;
  theme: Theme;
  title: React.ReactNode;
  titleRef?: React.RefObject<Text>;
  titleStyle?: StyleProp<TextStyle>;
};

const AppbarContent = ({
  // titleRef,
  onPress,
  style,
  subtitle,
  subtitleStyle,
  theme,
  title,
  titleStyle,
  ...rest
}: Props) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      <TouchableWithoutFeedback onPress={onPress} disabled={!onPress}>
        <View>
          <Text
            theme={theme}
            // ref={titleRef}
            style={[styles.title, titleStyle]}
            accessibilityTraits='header'
          >
            {title}
          </Text>
          {subtitle ? (
            <Text
              theme={theme}
              secondary
              style={[styles.subtitle, subtitleStyle]}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

// TODO: attach displayName to every component?
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

export default withTheme(AppbarContent);
