import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
} from 'react-native';

import type { Theme, AnyValue } from '../../types';
import { withTheme } from '../../core/theming';

import {
  blockSizes,
  buildBorderStyles,
  builtTextStyles,
} from '../../styles/styles';
import shadow from '../../styles/shadow';

import getSelectOptions, { Option } from './SelectBase';
import { ScrollView, Text, ArrowIcon, Panel } from '../..';

type Props = {
  disabled?: boolean;
  menuMaxHeight?: number;
  // TODO: what to put below?
  onChange: (value: AnyValue) => void;
  options: Array<Option>;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  value: AnyValue;
};

const Select = ({
  disabled = false,
  menuMaxHeight,
  onChange,
  options = [],
  style,
  theme,
  value,
  ...rest
}: Props) => {
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
    theme,
  });

  const selectedOption = selectedOptions[0];
  // TODO: close dropdown when user touches outside of component
  // TODO: native prop to use native select

  const borderStyles = buildBorderStyles(theme);
  const textStyles = builtTextStyles(theme);

  return (
    <Panel
      theme={theme}
      variant='cutout'
      background={disabled ? 'material' : 'canvas'}
      style={[styles.wrapper, style]}
      {...rest}
    >
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

                  isPressed && borderStyles.focusSecondaryOutline,
                ]}
              >
                <Text
                  theme={theme}
                  style={[
                    styles.textValue,
                    disabled ? textStyles.disabled : textStyles.default,
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
            <Panel
              theme={theme}
              variant={isPressed ? 'default' : 'raised'}
              invert={isPressed}
              style={[styles.fakeButton]}
            >
              <ArrowIcon
                theme={theme}
                segments={4}
                direction='down'
                disabled={disabled}
                style={{
                  paddingTop: isPressed ? 2 : 0,
                }}
              />
            </Panel>
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
              <ScrollView theme={theme}>{selectOptions}</ScrollView>
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Panel>
  );
};

const selectHeight = blockSizes.md;

const styles = StyleSheet.create({
  wrapper: {
    height: selectHeight,
    alignSelf: 'flex-start',
    padding: 0,
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
    ...shadow(2),
  },
});

export default withTheme(Select);
