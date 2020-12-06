import * as React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import { Text } from '..';

type Props = React.ComponentPropsWithRef<typeof View> & {
  title?: string;
  children: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const ListSection = ({
  children,
  title,
  titleStyle,
  style,
  ...rest
}: Props) => (
  <View {...rest} style={[styles.container, style]}>
    {title && (
      <Text bold secondary style={[styles.title, titleStyle]}>
        {title}
      </Text>
    )}
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    // marginVertical: 8,
  },
  title: {
    fontSize: 13,
    marginVertical: 8,
  },
});

export default ListSection;
