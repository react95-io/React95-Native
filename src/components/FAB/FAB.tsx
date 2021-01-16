import React, { useState } from 'react';
import {
  View,
  Animated,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TouchableHighlight,
} from 'react-native';
import type { AccessibilityState } from 'react-native';

import { withTheme } from '../../core/theming';
import type { $RemoveChildren, Theme } from '../../types';

import { Hourglass, Text, Panel, ArrowIcon } from '../..';
// import FABGroup from './FABGroup';

type Props = $RemoveChildren<typeof Panel> & {
  icon?: boolean;
  /**
   * Optional label for extended `FAB`.
   */
  label?: string;
  /**
   * Make the label text uppercased.
   */
  uppercase?: boolean;
  /**
   * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
   * Uses `label` by default if specified.
   */
  accessibilityLabel?: string;
  /**
   * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
   */
  accessibilityState?: AccessibilityState;
  /**
   * Whether an icon change is animated.
   */
  animated?: boolean;
  /**
   *  Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.
   */
  small?: boolean;
  /**
   * Custom color for the icon and label of the `FAB`.
   */
  color?: string;
  /**
   * Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean;
  /**
   * Whether `FAB` is currently visible.
   */
  visible?: boolean;
  /**
   * Whether to show a loading indicator.
   */
  loading?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Function to execute on long press.
   */
  onLongPress?: () => void;
  style?: StyleProp<ViewStyle>;
  /**
   * @optional
   */
  testID?: string;
  theme: Theme;
};

/**
 * A floating action button represents the primary action in an application.
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab-1.png" />
 *   <img src="screenshots/fab-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { FAB } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <FAB
 *     style={styles.fab}
 *     small
 *     icon="plus"
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   fab: {
 *     position: 'absolute',
 *     margin: 16,
 *     right: 0,
 *     bottom: 0,
 *   },
 * })
 *
 * export default MyComponent;
 * ```
 */

// const defaultSize = 56;
// const extendedSize = 48;
// const smallSize = 40;
const defaultSize = 64;
const extendedSize = 56;
const smallSize = 48;

const FAB = ({
  icon = true,
  small,
  label,
  accessibilityLabel = label,
  accessibilityState,
  // animated = true,
  // color: customColor,
  disabled,
  onPress,
  onLongPress,
  style,
  visible = true,
  uppercase = false,
  loading,
  testID,
  theme,
  ...rest
}: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const { current: visibility } = React.useRef<Animated.Value>(
    new Animated.Value(visible ? 1 : 0),
  );
  const scale = 0.5;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(visibility, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(visibility, {
        toValue: 0,
        duration: 150 * scale,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, scale, visibility]);

  // const IconComponent = animated ? null : null;

  // eslint-disable-next-line no-nested-ternary
  const size = label ? extendedSize : small ? smallSize : defaultSize;
  // const size = label ? defaultSize : extendedSize;
  const radius = size / 2;
  return (
    <Panel
      theme={theme}
      {...rest}
      elevation={disabled ? 0 : 4}
      // eslint-disable-next-line no-nested-ternary
      variant={disabled ? 'default' : isPressed ? 'cutout' : 'raised'}
      radius={radius}
      style={[
        // {
        //   // opacity: visibility,
        //   transform: [
        //     {
        //       scale: visibility,
        //     },
        //   ],
        //   backgroundColor: disabled ? theme.borderLight : theme.material,
        // },
        styles.container,
        disabled && styles.disabled,
        style,
      ]}
      pointerEvents={visible ? 'auto' : 'none'}
    >
      <TouchableHighlight
        onPress={onPress}
        onLongPress={onLongPress}
        onHideUnderlay={() => setIsPressed(false)}
        onShowUnderlay={() => setIsPressed(true)}
        underlayColor='none'
        disabled={disabled}
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
        accessibilityComponentType='button'
        accessibilityRole='button'
        accessibilityState={{ ...accessibilityState, disabled }}
        style={styles.touchable}
        testID={testID}
      >
        <View
          style={[
            styles.content,
            {
              height: size,
              width: label ? 'auto' : size,
              paddingHorizontal: label ? 16 : 0,
              paddingTop: isPressed ? 2 : 0,
            },
          ]}
          pointerEvents='none'
        >
          {icon && loading !== true ? (
            <ArrowIcon
              theme={theme}
              segments={4}
              style={{ marginTop: 2, width: 32 }}
              // disabled to drop shadow
              shadowOffset={1}
              disabled
              color={disabled ? undefined : theme.materialText}
            />
          ) : null}
          {loading ? <Hourglass size={32} /> : null}
          {label ? (
            <Text
              theme={theme}
              disabled
              bold
              selectable={false}
              style={[
                styles.label,
                uppercase && styles.uppercaseLabel,
                disabled ? {} : { color: theme.materialText },
              ]}
            >
              {label}
            </Text>
          ) : null}
        </View>
      </TouchableHighlight>
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 6,
    padding: 0,
  },
  touchable: {},
  // standard: {
  //   height: 56,
  //   width: 56,
  // },
  // small: {
  //   height: 40,
  //   width: 40,
  // },
  // extended: {
  //   height: 48,
  //   paddingHorizontal: 16,
  // },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginHorizontal: 8,
  },
  uppercaseLabel: {
    textTransform: 'uppercase',
  },
  disabled: {
    elevation: 0,
  },
});

// FAB.Group = FABGroup;

export default withTheme(FAB);
