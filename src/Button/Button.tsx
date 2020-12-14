import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  // TODO: use Pressable instead of TouchableHighlight?
  TouchableHighlight,
  View,
  ImageBackground,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Text } from '..';

import { ThemeContext } from '../common/theming/Theme';
import { blockSizes } from '../common/styles';

export const testId = 'button';

export type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'menu' | 'flat' | 'default' | 'outside';
  size?: ButtonSizes;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  fullWidth?: boolean;
  accessibilityLabel?: string;
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
  accessibilityLabel,
}: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const [isPressed, setIsPressed] = useState(false);

  const getWidth = () => {
    if (fullWidth) return '100%';
    return square ? blockSizes[size] : 'auto';
  };

  const isFlat = variant === 'flat';

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
        style={{
          backgroundColor: isFlat
            ? disabled
              ? theme.flatLight
              : 'transparent'
            : theme.material,
        }}
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
        accessibilityLabel={accessibilityLabel}
      >
        <View pointerEvents='none'>
          <Text disabled={!isFlat && disabled} secondary={isFlat && disabled}>
            {children}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },

  content: {
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
  variant?: 'menu' | 'flat' | 'default' | 'outside';
  primary?: boolean;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
};

// TODO: pass theme as an argument instead of using context ?
const Borders = ({
  isPressed = false,
  variant = 'default',
  primary = false,
  active = false,
  style = {},
}: BorderProps) => {
  const theme = useContext(ThemeContext);

  let wrapper: StyleProp<ViewStyle> = [];
  let outer;
  let inner: any[] = [];
  let focus;

  if (variant === 'default') {
    wrapper = primary ? [theme.border.outline] : [];
    outer = [theme.border.defaultOuter];
    inner = [theme.border.defaultInner];
    focus = isPressed ? [theme.border.focusOutline] : [];
  } else if (variant === 'outside') {
    wrapper = primary ? [theme.border.outline] : [];
    outer = [theme.border.outsideOuter];
    inner = [theme.border.outsideInner];
    focus = isPressed ? [theme.border.focusOutline] : [];
  } else if (variant === 'menu' && (active || isPressed)) {
    wrapper = [theme.border.well];
  } else if (variant === 'flat') {
    wrapper = primary ? [theme.border.outline] : [];
    outer = [theme.border.flat];
    inner = [];
    focus = isPressed ? [theme.border.focusOutline] : [];
  }

  return (
    <View
      style={[
        borderStyles.position,
        active || isPressed ? borderStyles.invert : {},
        ...wrapper,
        style,
      ]}
    >
      {outer && (
        <View style={[borderStyles.position, ...outer]}>
          {inner.length > 0 && (
            <View style={[borderStyles.position, ...inner]}>
              {focus && !active && (
                <View
                  style={[
                    borderStyles.position,
                    { margin: primary ? 0 : 2 },
                    ...focus,
                  ]}
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
