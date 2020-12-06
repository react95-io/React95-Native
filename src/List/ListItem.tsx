import * as React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { Text } from '..';
import { original as theme } from '../common/themes';
import { blockSizes } from '../common/styles';

type Props = React.ComponentPropsWithRef<typeof View> & {
  left?: React.ReactNode;
  right?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const ListItem = ({
  left,
  right,
  title,
  titleStyle,
  style,
  onPress,
  ...rest
}: Props) => (
  <View style={[styles.wrapper, style]} {...rest}>
    <TouchableOpacity onPress={onPress} accessibilityRole='button'>
      <View style={[styles.content]} pointerEvents='none'>
        {left && <View style={[styles.left]}>{left}</View>}
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {right && <View style={[styles.right]}>{right}</View>}
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {},
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: blockSizes.md,
    paddingVertical: 4,
  },
  title: {
    color: theme.progress,
    fontSize: 16,
  },
  left: {
    marginRight: 8,
  },
  right: {
    marginLeft: 8,
  },
});

export default ListItem;
