import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { original as theme } from '../common/themes';
import { blockSizes, text, border } from '../common/styles';
import { Border } from '../common/styleElements';

type Option = {
  value: any;
  label: React.ReactNode;
};

type SelectItemProps = {
  option: Option;
  onPress: () => void;
  isSelected: boolean;
};

const SelectItem = ({ option, onPress, isSelected }: SelectItemProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableHighlight
      onPress={() => onPress(option)}
      onHideUnderlay={() => setIsPressed(false)}
      onShowUnderlay={() => setIsPressed(true)}
      accessibilityRole='menuitem'
      underlayColor='none'
    >
      <View
        style={[
          styles.center,
          styles.optionWrapper,
          {
            backgroundColor:
              isPressed || isSelected ? theme.hoverBackground : theme.canvas,
          },
        ]}
      >
        <Text
          style={[
            styles.optionText,
            {
              color:
                isPressed || isSelected
                  ? theme.canvasTextInvert
                  : theme.canvasText,
            },
          ]}
        >
          {option.label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

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
};

const Select = ({
  value,
  options = [],
  disabled = false,
  onChange,
  style,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const selectedIndex = options.findIndex(option => option.value === value);

  function handleOptionSelect(option: Option) {
    onChange(option.value);
    setIsOpen(false);
  }

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
              styles.value,
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

                isPressed && border.focusSecondaryOutline,
              ]}
            >
              <Text
                style={[
                  styles.textValue,
                  disabled ? text.disabled : text.default,
                  !disabled &&
                    isPressed && {
                      color: isPressed
                        ? theme.canvasTextInvert
                        : theme.canvasText,
                    },
                ]}
              >
                {options[selectedIndex].label}
              </Text>
            </View>
          </View>
          <View style={[styles.fakeButton]}>
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
          <View style={[styles.options]}>
            {options.map((option, index) => (
              <SelectItem
                key={option.value}
                option={option}
                isSelected={index === selectedIndex}
                onPress={handleOptionSelect}
              />
            ))}
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Select;

const selectHeight = blockSizes.md + 2;

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
  value: {
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
    width: 33,
    padding: 4,
    backgroundColor: theme.material,
  },
  options: {
    position: 'absolute',
    top: selectHeight,
    left: 2,
    right: 4,
    backgroundColor: theme.canvas,
    borderWidth: 2,
    borderColor: theme.borderDarkest,
    padding: 2,
  },
  optionWrapper: {
    height: selectHeight - 4,
  },
  optionText: {
    fontSize: 16,
    paddingLeft: 6,
  },
});