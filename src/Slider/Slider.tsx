import React, { useRef, useState, useEffect, useContext } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  LayoutChangeEvent,
  GestureResponderEvent,
  PanResponder,
  ImageBackground,
} from 'react-native';
import useAsyncReference from '../common/hooks/useAsyncReference';
import { ThemeContext } from '../common/theming/Theme';

import type { $RemoveChildren } from '../types';
import { clamp, roundValueToStep, findClosest } from '../common/utils';

import { Border } from '../common/styleElements';

import { Panel, Text } from '..';

function percentToValue(percent: number, min: number, max: number) {
  return (max - min) * percent + min;
}

type Mark = { value: number; label?: string };

type Props = $RemoveChildren<typeof View> & {
  disabled?: boolean;
  marks?: Mark[] | boolean;
  max?: number;
  min?: number;
  onChange?: (a: number) => void;
  onChangeCommitted?: (a: number) => void;
  step?: number | null;
  style?: StyleProp<ViewStyle>;
  value?: number;
};

const Slider = ({
  disabled = false,
  marks: marksProp,
  max = 100,
  min = 0,
  onChange,
  onChangeCommitted,
  step = 1,
  style,
  value = 0,
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);
  const [isUsed, setIsUsed] = useState(false);

  let marks: Mark[];
  // if marks is set to true, we only show ticks at specified steps
  if (marksProp === true && step !== null) {
    marks = [...Array(Math.round((max - min) / step) + 1)].map((_, index) => ({
      value: min + step * index,
    }));
    // otherwise we display ticks and optional labels specified by the developer
  } else if (Array.isArray(marksProp)) {
    marks = marksProp;
    // otherwise don't display any marks or labels
  } else {
    marks = [];
  }

  const [sliderSize, setSliderSize] = useAsyncReference(0);
  const handleLayout = (e: LayoutChangeEvent) => {
    setSliderSize(e.nativeEvent.layout.width);
  };

  const getNewValue = (e: GestureResponderEvent) => {
    const percent = clamp(e.nativeEvent.locationX / sliderSize.current, 0, 1);
    let newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const marksValues = marks.map(mark => mark.value);
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min, max);
    return newValue;
  };

  // TODO: is this a good approach?
  const valueRef = useRef(value);
  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const handleChange = (newValue: number) => {
    if (valueRef.current !== newValue) {
      onChange?.(newValue);
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderStart: e => {
        setIsUsed(true);
        const newValue = getNewValue(e);
        handleChange(newValue);
      },
      onPanResponderMove: e => {
        const newValue = getNewValue(e);
        handleChange(newValue);
      },
      onPanResponderEnd: e => {
        setIsUsed(false);
        const newValue = getNewValue(e);
        onChangeCommitted?.(newValue);
      },
      onPanResponderTerminationRequest: () => true,
    }),
  ).current;

  return (
    <View
      style={[styles.wrapper, style]}
      {...rest}
      accessibilityRole='adjustable'
      accessibilityState={{ disabled }}
      accessibilityValue={{
        min,
        max,
        now: value,
      }}
    >
      <View
        style={[
          styles.inner,
          isUsed
            ? theme.border.focusOutline
            : { borderWidth: 2, borderColor: 'transparent' },
        ]}
      >
        <View
          pointerEvents={disabled ? 'none' : 'auto'}
          style={[styles.track]}
          onLayout={handleLayout}
          {...panResponder.panHandlers}
        >
          <View style={[styles.trackInner]}>
            <Border variant='cutout' />
            {/* THUMB */}
            <Panel
              pointerEvents='none'
              style={[
                styles.thumb,
                {
                  left: `${(100 * (value - min)) / (max - min)}%`,
                },
              ]}
            >
              {disabled && (
                <ImageBackground
                  style={{
                    flex: 1,
                  }}
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
              {isUsed && (
                <View style={styles.tooltipWrapper}>
                  <View
                    style={[
                      styles.tooltip,
                      {
                        borderColor: theme.borderDarkest,
                        backgroundColor: theme.tooltip,
                      },
                    ]}
                  >
                    <Text style={styles.tooltipText}>{value}</Text>
                  </View>
                </View>
              )}
            </Panel>
          </View>
        </View>
        {marks && (
          <View style={styles.marksWrapper}>
            {marks.map((m: Mark, index: number) => (
              <View
                style={[
                  styles.mark,

                  {
                    position: index === 0 ? 'relative' : 'absolute',
                    left: `${((m.value - min) / (max - min)) * 100}%`,
                  },
                ]}
                key={(m.value / (max - min)) * 100}
              >
                <View
                  style={[
                    styles.tick,
                    {
                      backgroundColor: disabled
                        ? theme.materialTextDisabled
                        : theme.materialText,
                      // TODO: util function to create disabled shadows
                      shadowColor: disabled
                        ? theme.materialTextDisabledShadow
                        : 'transparent',
                      shadowOffset: {
                        width: 1,
                        height: 1,
                      },
                      shadowOpacity: 1,
                      shadowRadius: 0,
                    },
                  ]}
                />
                {m.label ? (
                  <Text style={styles.markText} disabled={disabled}>
                    {m.label}
                  </Text>
                ) : null}
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const thumbWidth = 18;
const thumbHeight = 32;
const tickSize = 6;

const tooltipHeight = 30;
const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 4,
  },
  inner: {
    position: 'relative',
    paddingHorizontal: 16,
  },
  track: {
    paddingVertical: thumbHeight / 2,
  },
  trackInner: {
    height: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumb: {
    position: 'absolute',
    width: thumbWidth,
    height: thumbHeight,
    transform: [
      {
        translateX: -thumbWidth / 2,
      },
    ],
  },
  tooltipWrapper: {
    position: 'absolute',
    top: -(tooltipHeight + 18),
    left: thumbWidth / 2,
    alignItems: 'center',
  },
  tooltip: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    padding: 8,
    backgroundColor: 'red',
  },
  tooltipText: {
    fontSize: 16,
  },
  marksWrapper: {
    position: 'relative',
  },
  mark: {
    transform: [{ translateX: -1 }],
  },
  tick: {
    height: tickSize,
    marginBottom: 2,
    width: 2,
  },
  markText: {
    fontSize: 14,
    // TODO: is there a way to translate by 0.5 of a character width?
    // tick should centered above
    transform: [{ translateX: -2 }],
  },
});

export default Slider;
