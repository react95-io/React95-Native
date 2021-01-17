import * as React from 'react';
import {
  Animated,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';
import { Text } from '../..';

type Props = React.ComponentProps<typeof Animated.View> & {
  /**
   * Whether the Snackbar is currently visible.
   */
  visible: boolean;
  /**
   * Label and press callback for the action button. It should contain the following properties:
   * - `label` - Label of the action button
   * - `onPress` - Callback that is called when action button is pressed.
   */
  action?: {
    label: string;
    accessibilityLabel?: string;
    onPress: () => void;
  };
  /**
   * The duration for which the Snackbar is shown.
   */
  duration?: number;
  /**
   * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
   */
  onDismiss: () => void;
  /**
   * Text content of the Snackbar.
   */
  children: React.ReactNode;
  /**
   * Style for the wrapper of the snackbar
   */
  wrapperStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  ref?: React.RefObject<View>;
  /**
   * @optional
   */
  theme: Theme;
};

const DURATION_SHORT = 4000;
const DURATION_MEDIUM = 7000;
const DURATION_LONG = 10000;

const shadowOffset = 8;
const radius = 4;

const Snackbar = ({
  visible,
  action,
  duration = DURATION_MEDIUM,
  onDismiss,
  children,
  wrapperStyle,
  style,
  theme,
  ...rest
}: Props) => {
  const { current: opacity } = React.useRef<Animated.Value>(
    new Animated.Value(0.0),
  );
  const [hidden, setHidden] = React.useState<boolean>(!visible);

  const hideTimeout = React.useRef<NodeJS.Timeout | undefined>(undefined);

  const scale = 0.5;

  React.useEffect(() => {
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  React.useLayoutEffect(() => {
    if (visible) {
      // show
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      setHidden(false);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          const isInfinity =
            duration === Number.POSITIVE_INFINITY ||
            duration === Number.NEGATIVE_INFINITY;

          if (finished && !isInfinity) {
            hideTimeout.current = setTimeout(onDismiss, duration);
          }
        }
      });
    } else {
      // hide
      if (hideTimeout.current) clearTimeout(hideTimeout.current);

      Animated.timing(opacity, {
        toValue: 0,
        duration: 100 * scale,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) setHidden(true);
      });
    }
  }, [visible, duration, opacity, scale, onDismiss]);

  if (hidden) return null;

  return (
    <SafeAreaView
      pointerEvents='box-none'
      style={[styles.wrapper, wrapperStyle]}
    >
      <Animated.View
        pointerEvents='box-none'
        accessibilityLiveRegion='polite'
        // TODO: fix this TS error
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={
          [
            styles.container,
            {
              opacity,
              transform: [
                {
                  scale: visible
                    ? opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.9, 1],
                      })
                    : 1,
                },
              ],
            },
            style,
          ] as StyleProp<ViewStyle>
        }
        {...rest}
      >
        <View style={styles.inner}>
          <View style={styles.shadow}>
            <ImageBackground
              style={[{ width: '100%', height: '100%' }]}
              imageStyle={{
                resizeMode: 'repeat',
              }}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQoU2NkYGD4z4AKGJG5IA4dFKA5AdVKFAdBVaK4iXIFAEiuCAWq9MdHAAAAAElFTkSuQmCC',
              }}
            />
          </View>
          <View
            style={[
              styles.card,
              {
                backgroundColor: theme.tooltip,
                borderColor: theme.borderDarkest,
              },
            ]}
          >
            <Text style={[styles.content, { marginRight: action ? 0 : 16 }]}>
              {children}
            </Text>
            {action ? (
              <TouchableOpacity
                activeOpacity={0.4}
                accessibilityLabel={action.accessibilityLabel}
                onPress={() => {
                  action.onPress();
                  onDismiss();
                }}
                style={styles.button}
              >
                <Text bold style={styles.buttonText}>
                  {action.label}
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

Snackbar.DURATION_SHORT = DURATION_SHORT;

Snackbar.DURATION_MEDIUM = DURATION_MEDIUM;

Snackbar.DURATION_LONG = DURATION_LONG;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  container: {
    margin: 16,
  },
  content: {
    marginLeft: 16,
    marginVertical: 16,
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 8,
    textTransform: 'uppercase',
    alignSelf: 'flex-end',
    height: 36,
    paddingHorizontal: 8,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
  },
  inner: {
    flex: 1,
    marginRight: shadowOffset,
    marginBottom: shadowOffset,
  },
  card: {
    borderWidth: 2,
    borderRadius: radius,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shadow: {
    position: 'absolute',
    top: shadowOffset,
    left: shadowOffset,
    overflow: 'hidden',
    borderRadius: radius,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Snackbar);
