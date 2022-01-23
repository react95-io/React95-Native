import React, { useState } from 'react';
import {
  StyleSheet,
  // TODO: use Pressable instead of TouchableHighlight?
  TouchableHighlight,
  View,
  ImageBackground,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type { Sizes, Theme } from '../../types';
import { withTheme } from '../../core/theming';
import { blockSizes, buildBorderStyles } from '../../styles/styles';

import { Text } from '../..';

export const testId = 'button';

export type ButtonVariants = 'menu' | 'flat' | 'default' | 'raised';

type ButtonProps = React.ComponentPropsWithRef<typeof View> & {
  accessibilityLabel?: string;
  active?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  primary?: boolean;
  size?: Sizes;
  square?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariants;
  theme: Theme;
};

const Button = ({
  accessible,
  accessibilityLabel,
  active = false,
  children,
  disabled = false,
  onPress,
  onLongPress,
  primary = false,
  size = 'md',
  square = false,
  style = {},
  variant = 'default',
  theme,
  ...rest
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const getWidth = () => {
    return square ? blockSizes[size] : 'auto';
  };

  const isFlat = variant === 'flat';

  const getBackgroundColor = () => {
    if (isFlat) {
      return disabled ? theme.flatLight : 'transparent';
    }
    return theme.material;
  };

  return (
    <View
      style={[
        styles.wrapper,
        { height: blockSizes[size], width: getWidth() },
        style,
      ]}
      testID={testId}
      {...rest}
    >
      <Borders
        theme={theme}
        isPressed={isPressed}
        variant={variant}
        primary={primary}
        active={active}
        style={{
          backgroundColor: getBackgroundColor(),
        }}
      />

      <TouchableHighlight
        style={[
          styles.content,
          { paddingHorizontal: square ? 0 : 10 },
          { marginTop: active || isPressed ? 2 : 0 },
        ]}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        // TODO: use onHideUnderlay or onPressIn?
        onHideUnderlay={() => setIsPressed(false)}
        onShowUnderlay={() => setIsPressed(true)}
        underlayColor='none'
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
        accessibilityComponentType='button'
        accessibilityRole='button'
        accessibilityState={{ disabled }}
        accessible={accessible}
      >
        <View pointerEvents='none'>
          {typeof children === 'string' ? (
            <Text disabled={!isFlat && disabled} secondary={isFlat && disabled}>
              {children}
            </Text>
          ) : (
            children
          )}
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

export default withTheme(Button);

// Borders acts like a pseudo element that
// will be positioned absolutely in it's parent element

type BorderProps = {
  isPressed?: boolean;
  variant?: ButtonVariants;
  primary?: boolean;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

// TODO: pass theme as an argument instead of using context ?
const Borders = ({
  isPressed = false,
  variant = 'default',
  primary = false,
  active = false,
  style = {},
  theme,
}: BorderProps) => {
  let wrapper: StyleProp<ViewStyle> = [];
  let outer;
  let inner;
  let focus;

  const borders = buildBorderStyles(theme);
  if (variant === 'default') {
    wrapper = primary ? [borders.outline] : [];
    outer = [borders.defaultOuter];
    inner = [borders.defaultInner];
    focus = isPressed ? [borders.focusOutline] : [];
  } else if (variant === 'raised') {
    wrapper = primary ? [borders.outline] : [];
    outer = [borders.outsideOuter];
    inner = [borders.outsideInner];
    focus = isPressed ? [borders.focusOutline] : [];
  } else if (variant === 'menu' && (active || isPressed)) {
    wrapper = [borders.well];
  } else if (variant === 'flat') {
    wrapper = primary ? [borders.outline] : [];
    outer = [borders.flat];
    inner = isPressed ? [borders.focusOutline] : [];
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
      {Array.isArray(outer) && (
        <View style={[borderStyles.position, ...outer]}>
          {Array.isArray(inner) && inner.length > 0 && (
            <View style={[borderStyles.position, ...inner]}>
              {Array.isArray(focus) && !active && (
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
