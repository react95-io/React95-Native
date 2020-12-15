import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type { Sizes } from '../types';
import { ThemeContext } from '../common/theming/Theme';
import { blockSizes } from '../common/styles';

import { Text } from '..';

// TODO: add icon prop

type Props = React.ComponentPropsWithRef<typeof View> & {
  disabled?: boolean;
  onPress: () => void;
  primary?: boolean;
  size?: Sizes;
  style?: StyleProp<ViewStyle>;
  title: string;
};

export const Item = ({
  disabled,
  onPress,
  primary = false,
  size = 'md',
  style,
  title,
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      {...rest}
      style={[
        styles.item,
        { height: blockSizes[size] },
        {
          backgroundColor: isPressed ? theme.hoverBackground : theme.material,
        },
        style,
      ]}
    >
      <TouchableHighlight
        style={[styles.button]}
        onPress={onPress}
        disabled={disabled}
        onHideUnderlay={() => setIsPressed(false)}
        onShowUnderlay={() => setIsPressed(true)}
        underlayColor='none'
        // TODO: which accessibilityRole put in here?
        accessibilityRole='button'
      >
        <View pointerEvents='none' style={[styles.content]}>
          <Text
            bold={primary}
            style={[
              disabled ? theme.text.disabled : theme.text.default,
              !disabled && {
                color: isPressed
                  ? theme.materialTextInvert
                  : theme.materialText,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    position: 'relative',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  content: {
    alignSelf: 'flex-start',
  },
});

export default Item;
