import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import { ThemeContext } from '../common/theming/Theme';
import { blockSizes } from '../common/styles';
import { Border } from '../common/styleElements';

import getSelectOptions, { Option } from './SelectBase';
import { ScrollView } from '..';

const dropdownSymbol = {
  default:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAALElEQVQoU2NkIAIwEqGGgWRF/7GYCjYE3SRkhXA5bNaBFKKIk+wmnB4lyiQAAsgDCqkPxTcAAAAASUVORK5CYII=',
  disabled:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAANklEQVQoU2NkIAIwEqGGgTRFLa0t/9FNramuARuCYhKyQpgCDEUgAZBCZAVYFWHzCGkOxxcUANHnDAplQ9G1AAAAAElFTkSuQmCC',
};

type SelectProps = {
  options: Array<Option>;
  value: any;
  disabled?: boolean;
  // TODO: what to put below?
  onChange: () => void;
  style?: Object;
  menuMaxHeight?: number;
};

const Select = ({
  value,
  options = [],
  disabled = false,
  menuMaxHeight,
  onChange,
  style,
}: SelectProps) => {
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  function handleOptionSelect(option: Option) {
    onChange(option.value);
    setIsOpen(false);
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
      <View style={[styles.wrapper, style]}>
        <Border variant='cutout' />
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
                  backgroundColor: disabled
                    ? theme.material
                    : isPressed
                    ? theme.hoverBackground
                    : theme.canvas,
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
            style={[styles.fakeButton, { backgroundColor: theme.material }]}
          >
            <ImageBackground
              // border to compensate for Border
              style={[
                {
                  marginTop: isPressed ? 1 : 0,
                  width: '100%',
                  height: '100%',
                },
              ]}
              imageStyle={{
                resizeMode: 'contain',
                flex: 1,
              }}
              source={{
                uri: dropdownSymbol[disabled ? 'disabled' : 'default'],
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
  );
};

export default Select;

const selectHeight = blockSizes.md;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: selectHeight,
    alignSelf: 'flex-start',
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
