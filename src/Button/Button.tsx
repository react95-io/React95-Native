import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  ImageBackground,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { original as theme } from '../common/themes';
import { border, text, blockSizes } from '../common/styles';

export const testId = 'button';

export type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  variant?: 'menu' | 'flat' | 'default';
  size?: ButtonSizes;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  fullWidth?: boolean;
  square?: boolean;
  primary?: boolean;
  active?: boolean;
};

const Button = ({
  children,
  onPress,
  variant = 'default',
  size = 'md',
  disabled = false,
  style = {},
  fullWidth = false,
  square = false,
  primary = false,
  active = false,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const getWidth = () => {
    if (fullWidth) return '100%';
    return square ? blockSizes[size] : 'auto';
  };

  return (
    <View
      style={[
        styles.wrapper,
        { height: blockSizes[size], width: getWidth() },
        style,
      ]}
      testID={testId}
    >
      <Borders
        isPressed={isPressed}
        variant={variant}
        primary={primary}
        active={active}
      />

      <TouchableHighlight
        style={[
          styles.content,
          { paddingHorizontal: square ? 0 : 10 },
          { marginTop: active || isPressed ? 2 : 0 },
        ]}
        onPress={onPress}
        disabled={disabled}
        onHideUnderlay={() => setIsPressed(false)}
        onShowUnderlay={() => setIsPressed(true)}
        underlayColor='none'
        accessibilityRole='button'
      >
        <Text style={[disabled ? text.disabled : text.default]}>
          {children}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignSelf: 'flex-start',
    // padding added to compensate for borders
    padding: 4,
    width: 20,
  },
  content: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;

// Borders acts like a pseudo element that
// will be positioned absolutely in it's parent element

type BorderProps = {
  isPressed?: boolean;
  variant?: 'menu' | 'flat' | 'default';
  primary?: boolean;
  active?: boolean;
};

const Borders = ({
  isPressed = false,
  variant = 'default',
  primary = false,
  active = false,
}: BorderProps) => {
  let wrapper: StyleProp<ViewStyle> = [];
  let outer;
  let inner;
  let focus;

  if (variant === 'default') {
    wrapper = primary ? [border.outline] : [];
    outer = [border.defaultOuter];
    inner = [border.defaultInner];
    focus = isPressed ? [border.focusOutline] : [];
  } else if (variant === 'menu' && (active || isPressed)) {
    wrapper = [border.well];
  }
  return (
    <View
      style={[
        borderStyles.position,
        { backgroundColor: theme.material },
        active || isPressed ? borderStyles.invert : {},
        ...wrapper,
      ]}
    >
      {outer && (
        <View style={[borderStyles.position, ...outer]}>
          {inner && (
            <View style={[borderStyles.position, ...inner]}>
              {focus && !active && (
                <View
                  style={[borderStyles.position, { margin: 2 }, ...focus]}
                />
              )}
              {active && (
                <ImageBackground
                  style={[borderStyles.position]}
                  imageStyle={{
                    resizeMode: 'repeat',
                  }}
                  source={{
                    // TODO: create util function for generating checkered background
                    uri:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIUlEQVQoU2P8////fwYkwMjIyIjCp4MCZPtAbAwraa8AAEGrH/nfAIhgAAAAAElFTkSuQmCC',
                  }}
                />
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const borderStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  invert: {
    transform: [{ rotate: '180deg' }],
  },
});
