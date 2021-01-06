import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type { AnyValue } from '../types';

import { ThemeContext } from '../common/theming/Theme';
import { blockSizes } from '../common/styles';
import { Border } from '../common/styleElements';

import getSelectOptions, { Option } from './SelectBase';
import { ScrollView, Text, ArrowIcon } from '..';

type Props = {
  options: Array<Option>;
  value: AnyValue;
  disabled?: boolean;
  // TODO: what to put below?
  onChange: (value: AnyValue) => void;
  style?: StyleProp<ViewStyle>;
  menuMaxHeight?: number;
};

const Select = ({
  value,
  options = [],
  disabled = false,
  menuMaxHeight,
  onChange,
  style,
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  function handleOptionSelect(option: Option) {
    onChange(option.value);
    setIsOpen(false);
  }

  function getLabelContainerBackgroundColor() {
    if (disabled) {
      return theme.material;
    }

    if (isPressed) {
      return theme.hoverBackground;
    }

    return theme.canvas;
  }

  const [selectedOptions, selectOptions] = getSelectOptions({
    options,
    values: [value],
    onChange: handleOptionSelect,
  });

  const selectedOption = selectedOptions[0];
  // TODO: close dropdown when user touches outside of component
  // TODO: native prop to use native select

  return (
    <View style={[styles.wrapper, style]} {...rest}>
      <Border variant='cutout' />
      <TouchableHighlight
        onPress={() => setIsOpen(currentIsOpen => !currentIsOpen)}
        activeOpacity={1}
        disabled={disabled}
        onHideUnderlay={() => setIsPressed(false)}
        onShowUnderlay={() => setIsPressed(true)}
        // TODO: accessibility
        // accessibilityTraits
        // accessibilityComponentType
        // accessibilityRole
        // accessibilityState
        underlayColor='none'
      >
        <View style={[styles.inner]}>
          <View style={[styles.flex]}>
            <View
              style={[
                styles.selectValue,
                { backgroundColor: disabled ? theme.material : theme.canvas },
              ]}
            >
              <View
                style={[
                  styles.center,
                  {
                    borderWidth: 2,
                    borderColor: disabled ? theme.material : theme.canvas,
                    backgroundColor: getLabelContainerBackgroundColor(),
                  },

                  isPressed && theme.border.focusSecondaryOutline,
                ]}
              >
                <Text
                  style={[
                    styles.textValue,
                    disabled ? theme.text.disabled : theme.text.default,
                    !disabled &&
                      isPressed && {
                        color: isPressed
                          ? theme.canvasTextInvert
                          : theme.canvasText,
                      },
                  ]}
                >
                  {selectedOption.label}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.fakeButton,
                {
                  backgroundColor: theme.material,
                },
              ]}
            >
              <ArrowIcon
                segments={4}
                direction='bottom'
                disabled={disabled}
                style={{
                  paddingTop: isPressed ? 2 : 0,
                }}
              />
              <Border
                variant={isPressed ? 'default' : 'outside'}
                invert={isPressed}
              />
            </View>
          </View>
          {isOpen && (
            <View
              style={[
                styles.options,
                {
                  height: menuMaxHeight || 'auto',
                  backgroundColor: theme.canvas,
                  borderColor: theme.borderDarkest,
                },
              ]}
            >
              <ScrollView>{selectOptions}</ScrollView>
            </View>
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const selectHeight = blockSizes.md;

const styles = StyleSheet.create({
  wrapper: {
    height: selectHeight,
    alignSelf: 'flex-start',
  },
  inner: {
    position: 'relative',
    padding: 4,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  selectValue: {
    flexGrow: 1,
    flex: 1,
    height: '100%',
    padding: 2,
  },
  center: {
    flexGrow: 1,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  textValue: {
    fontSize: 16,
    paddingHorizontal: 4,
  },
  fakeButton: {
    position: 'relative',
    height: '100%',
    width: 30,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: {
    position: 'absolute',
    top: selectHeight,
    left: 0,
    right: 0,
    borderWidth: 2,
    padding: 2,
    display: 'flex',
  },
});

export default Select;
