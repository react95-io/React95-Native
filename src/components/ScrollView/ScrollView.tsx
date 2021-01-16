import React, { useContext, useRef } from 'react';
import {
  StyleSheet,
  View,
  ScrollView as RNScrollView,
  ViewStyle,
  StyleProp,
  ImageBackground,
  PanResponder,
  TouchableWithoutFeedback,
} from 'react-native';
import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import useAsyncReference from '../../hooks/useAsyncReference';
import { ThemeContext } from '../../styles/theming/Theme';

import { Panel, Button, ArrowIcon } from '../..';

type Direction = -1 | 1;

const scrollbarThickness = 30;
const scrollbarButtonSize = scrollbarThickness;

type ScrollViewProps = React.ComponentProps<typeof View> & {
  alwaysShowScrollbars?: boolean;
  children: React.ReactNode;
  horizontal?: boolean;
  scrollViewProps?: React.ComponentProps<typeof RNScrollView>;
  style?: StyleProp<ViewStyle>;
};

// TODO: performance improvements (callbacks, refs ...etc)
const ScrollView = ({
  alwaysShowScrollbars = false,
  children,
  horizontal = false,
  scrollViewProps = {},
  style,
  ...rest
}: ScrollViewProps) => {
  const theme = useContext(ThemeContext);
  const scrollViewRef = useRef<RNScrollView>(null);

  const [contentOffset, setContentOffset] = useAsyncReference(0);
  const [contentSize, setContentSize] = useAsyncReference(0);
  const [scrollViewSize, setScrollViewSize] = useAsyncReference(0);

  const scrollbarAxis = horizontal ? 'x' : 'y';
  const scrollbarLengthDimension = horizontal ? 'width' : 'height';
  const scrollbarThicknessDimension = horizontal ? 'height' : 'width';

  const contentFullyVisible = contentSize.current <= scrollViewSize.current;

  const visibleContentRatio = scrollViewSize.current / contentSize.current;

  const scrolledContentRatio = contentOffset.current / contentSize.current;

  const thumbPosition =
    Math.max(
      0,
      Math.min(
        1 - visibleContentRatio,
        parseFloat(scrolledContentRatio.toFixed(3)),
      ),
    ) * 100;

  // CALLBACKS

  const scrollTo = (distance: number, animated = false) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        [scrollbarAxis]: distance,
        animated,
      });
    }
  };

  const handleScrollButtonPress = (direction: Direction) => {
    scrollTo(contentOffset.current + 24 * direction, true);
  };

  const handleTrackPress = (direction: Direction) => {
    scrollTo(contentOffset.current + scrollViewSize.current * direction);
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollViewProps.onScroll?.(e);
    setContentOffset(e.nativeEvent.contentOffset[scrollbarAxis]);
  };

  const handleContentSizeChange = (width: number, height: number) => {
    scrollViewProps.onContentSizeChange?.(width, height);
    setContentSize(horizontal ? width : height);
  };

  const handleLayout = (e: LayoutChangeEvent) => {
    scrollViewProps.onLayout?.(e);
    setScrollViewSize(e.nativeEvent.layout[scrollbarLengthDimension]);
  };

  const dragStartScrollPositionRef = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        dragStartScrollPositionRef.current = contentOffset.current;
      },
      onPanResponderMove: (_evt, gestureState) => {
        const scrollTrackLength =
          scrollViewSize.current - 2 * scrollbarButtonSize;
        const scrollDistanceChange =
          gestureState[horizontal ? 'dx' : 'dy'] / scrollTrackLength;

        const translatedDistance = scrollDistanceChange * contentSize.current;
        scrollTo(dragStartScrollPositionRef.current + translatedDistance);
      },
      onPanResponderTerminationRequest: () => true,
    }),
  ).current;

  return (
    <View
      style={[
        styles.wrapper,
        {
          flexDirection: horizontal ? 'column' : 'row',
        },
        style,
      ]}
      {...rest}
    >
      <View style={[styles.content]}>
        <RNScrollView
          {...scrollViewProps}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          ref={scrollViewRef}
          onScroll={handleScroll}
          onContentSizeChange={handleContentSizeChange}
          onLayout={handleLayout}
          horizontal={horizontal}
        >
          {children}
        </RNScrollView>
      </View>
      {(!contentFullyVisible || alwaysShowScrollbars) && (
        <View
          accessibilityRole='scrollbar'
          style={[
            {
              flexDirection: horizontal ? 'row' : 'column',
              [scrollbarLengthDimension]: '100%',
              [scrollbarThicknessDimension]: scrollbarThickness,
              backgroundColor: theme.material,
            },
          ]}
        >
          <ImageBackground
            style={[styles.background]}
            imageStyle={{
              resizeMode: 'repeat',
            }}
            source={{
              // TODO: create util function for generating checkered background
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIUlEQVQoU2P8////fwYkwMjIyIjCp4MCZPtAbAwraa8AAEGrH/nfAIhgAAAAAElFTkSuQmCC',
            }}
          />
          <Button
            variant='raised'
            onPress={() => handleScrollButtonPress(-1)}
            disabled={contentFullyVisible}
            style={[styles.scrollbarButton]}
          >
            <ArrowIcon
              direction={horizontal ? 'left' : 'up'}
              disabled={contentFullyVisible}
              segments={4}
            />
          </Button>
          <View style={[styles.scrollbarTrack]}>
            {!contentFullyVisible && (
              <View
                style={{
                  flex: 1,
                  flexDirection: horizontal ? 'row' : 'column',
                }}
              >
                <TouchableWithoutFeedback
                  onPressIn={() => handleTrackPress(-1)}
                >
                  <View
                    style={{
                      [scrollbarLengthDimension]: `${thumbPosition}%`,
                    }}
                  />
                </TouchableWithoutFeedback>
                {/* SCROLLBAR THUMB */}
                <Panel
                  variant='raised'
                  style={{
                    [scrollbarLengthDimension]: `${visibleContentRatio * 100}%`,
                  }}
                  {...panResponder.panHandlers}
                />
                <TouchableWithoutFeedback onPressIn={() => handleTrackPress(1)}>
                  <View
                    style={{
                      flex: 1,
                    }}
                  />
                </TouchableWithoutFeedback>
              </View>
            )}
          </View>
          <Button
            variant='raised'
            onPress={() => handleScrollButtonPress(1)}
            disabled={contentFullyVisible}
            style={[styles.scrollbarButton]}
          >
            <ArrowIcon
              direction={horizontal ? 'right' : 'down'}
              disabled={contentFullyVisible}
              segments={4}
            />
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    position: 'relative',
  },
  content: {
    flexGrow: 1,
    flexShrink: 1,
  },
  scrollbarButton: {
    height: scrollbarButtonSize,
    width: scrollbarButtonSize,
    padding: 0,
  },
  scrollbarTrack: {
    overflow: 'hidden',
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default ScrollView;
