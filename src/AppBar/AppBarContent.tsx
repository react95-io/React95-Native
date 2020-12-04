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

import Text from '../Text';

type Props = {
  color?: string;
  title: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  //   TODO: pass refs in every component
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
  //   titleRef,
  titleStyle,
  title,
  ...rest
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={!onPress}>
      <View style={[styles.container, style]} {...rest}>
        <Text
          //   ref={titleRef}
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
