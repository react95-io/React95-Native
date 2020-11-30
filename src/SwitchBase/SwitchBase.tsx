import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  View,
  ViewStyle,
} from 'react-native';

import { Border } from '../common/styleElements';
import { original as theme } from '../common/themes';
import { border } from '../common/styles';

import { Text } from '..';

const switchSize = 20;

type Props = {
  disabled?: boolean;
  label?: string;
  onPress?: () => void;
  status: 'checked' | 'unchecked' | 'indeterminate';
  component: 'radio' | 'checkbox';
  style?: StyleProp<ViewStyle>;
};

const symbols = {
  checkbox: {
    default:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAQ0lEQVQoU42Q0Q4AIARFj///6BqNSat4sXFcF6ER8mEGIC9IAY2AbCKpOnBAVgA2wIuac8MFQ/m6Ih9UjVdvy3njTUwR1AkKqm4yNwAAAABJRU5ErkJggg==',
    disabled:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAR0lEQVQoU2NkIAIw4lPT0tryv6a6hhGnIpACkAFwRTAdMFNhCjAUwQTQFYDEwdYhS8BMA1kDY8MZ2EzAUAQzEdkErIpwBQcA7RckCvjAHfcAAAAASUVORK5CYII=',
  },
  radio: {
    default:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKElEQVQoU2NkIAAYSVXwH6oBrhHZBJgkzFCwHEkKQBrwWoHVvQR9AQAfmgQJp08TYAAAAABJRU5ErkJggg==',
    disabled:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQoU2NkIAAYSVLQ0tryH6ShproGrhHOgEnCTIQpIl4BSCdeK3A5lqAvAEBkEAkDjL/SAAAAAElFTkSuQmCC',
  },
  indeterminate: {
    default:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQoU2NkYGD4z4AKGJG5IA4dFKA5AdVKFAdBVaK4iXIFAEiuCAWq9MdHAAAAAElFTkSuQmCC',
    disabled:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQoU2NsaW35z4AEaqprGJH5jHRQgGwfiI1uJYqDaKMAAHKtGjlbjgHwAAAAAElFTkSuQmCC',
  },
};

const SwitchBase = ({
  disabled = false,
  label = '',
  onPress = () => {},
  component,
  status,
  style = {},
}: Props) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const isRadio = component === 'radio';
  const borderRadius = isRadio ? switchSize / 2 : 0;

  const renderBox = () => {
    if (status === 'checked') {
      const symbol = symbols[component][disabled ? 'disabled' : 'default'];

      return (
        <ImageBackground
          // border to compensate for Border
          style={[
            {
              width: '100%',
              height: '100%',
              borderWidth: 4,
            },
          ]}
          imageStyle={{
            resizeMode: 'contain',
            flex: 1,
          }}
          source={{
            uri: symbol,
          }}
        />
      );
    }
    if (status === 'indeterminate') {
      const symbol = symbols[status][disabled ? 'disabled' : 'default'];

      return (
        <ImageBackground
          style={[{ width: '100%', height: '100%' }]}
          imageStyle={{
            resizeMode: 'repeat',
          }}
          source={{
            uri: symbol,
          }}
        />
      );
    }

    return <Text> </Text>;
  };

  return (
    <TouchableHighlight
      style={[styles.wrapper, style]}
      onPress={onPress}
      activeOpacity={1}
      disabled={disabled}
      onHideUnderlay={() => setIsPressed(false)}
      onShowUnderlay={() => setIsPressed(true)}
      // TODO: check if those accessibility properties are correct
      accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType='button'
      accessibilityRole={component}
      accessibilityState={{ disabled, checked: status === 'checked' }}
      underlayColor='none'
    >
      <View style={[styles.content]} pointerEvents='none'>
        <View
          style={[
            styles.switchSymbol,
            {
              backgroundColor: disabled ? theme.material : theme.canvas,
              borderRadius,
              overflow: 'hidden',
            },
          ]}
        >
          {renderBox()}
          <Border variant='cutout' radius={borderRadius} />
        </View>
        {Boolean(label) && (
          <View
            style={[
              !disabled && isPressed
                ? border.focusOutline
                : { borderWidth: 2, borderColor: 'transparent' },
            ]}
          >
            <Text disabled={disabled} style={[styles.label]}>
              {label}
            </Text>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 'auto',
    alignSelf: 'flex-start',
    padding: 4,
    backgroundColor: theme.material,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
  },
  switchSymbol: {
    width: switchSize,
    height: switchSize,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
  },
});

export default SwitchBase;