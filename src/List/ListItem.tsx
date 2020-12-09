import React, { useContext } from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import { ThemeContext } from '../common/theming/Theme';
import { blockSizes } from '../common/styles';

import { Text } from '..';

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
}: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={style} {...rest}>
      <TouchableOpacity onPress={onPress} accessibilityRole='button'>
        <View style={[styles.content]} pointerEvents='none'>
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

export default ListItem;
