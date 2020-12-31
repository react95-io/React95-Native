import React, { useState, useContext, useRef } from 'react';
import {
  StyleSheet,
  View,
  ScrollView as RNScrollView,
  ViewStyle,
  StyleProp,
  ImageBackground,
  Image,
} from 'react-native';
import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { ThemeContext } from '../common/theming/Theme';

import { Panel, Button } from '..';

type ScrollViewProps = React.ComponentProps<typeof View> & {
  alwaysShowScrollbars?: boolean;
  children: React.ReactNode;
  horizontal?: boolean;
  scrollViewProps?: React.ComponentProps<typeof RNScrollView>;
  style?: StyleProp<ViewStyle>;
};

const scrollbarSize = 30;

const Icon = (
  <Image
    style={[
      {
        width: 18,
        height: 18,
      },
    ]}
    source={{
      uri:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAALElEQVQoU2NkIAIwEqGGgWRF/7GYCjYE3SRkhXA5bNaBFKKIk+wmnB4lyiQAAsgDCqkPxTcAAAAASUVORK5CYII=',
    }}
  />
);

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
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewSize, setScrollViewSize] = useState(0);

  const visiblePercentage = 100 * (scrollViewSize / contentSize);

  const scrollAxis = horizontal ? 'x' : 'y';
  const scrollDimension = horizontal ? 'width' : 'height';

  const scrolledPercentage = (contentOffset[scrollAxis] / contentSize) * 100;
  const thumbPosition = Math.max(
    0,
    Math.min(
      100 - visiblePercentage,
      parseFloat(scrolledPercentage.toFixed(3)),
    ),
  );

  const moveScroll = (direction: -1 | 1) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        [scrollAxis]: contentOffset[scrollAxis] + 24 * direction,
      });
    }
  };

  const contentFullyVisible = contentSize <= scrollViewSize;

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollViewProps.onScroll?.(e);
    setContentOffset(e.nativeEvent.contentOffset);
  };

  const handleContentSizeChange = (width: number, height: number) => {
    scrollViewProps.onContentSizeChange?.(width, height);
    setContentSize(horizontal ? width : height);
  };

  const handleLayout = (e: LayoutChangeEvent) => {
    scrollViewProps.onLayout?.(e);
    setScrollViewSize(e.nativeEvent.layout[scrollDimension]);
  };

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
          style={[
            {
              flexDirection: horizontal ? 'row' : 'column',
              [scrollDimension]: '100%',
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
            variant='outside'
            onPress={() => moveScroll(-1)}
            disabled={contentFullyVisible}
            style={[styles.scrollbarButton]}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ rotate: horizontal ? '90deg' : '180deg' }],
              }}
            >
              {Icon}
            </View>
          </Button>
          <View style={[styles.scrollbarTrack]}>
            {!contentFullyVisible && (
              // SCROLLBAR THUMB
              <Panel
                variant='outside'
                style={[
                  {
                    position: 'absolute',
                    [horizontal ? 'left' : 'top']: `${thumbPosition}%`,
                    height: horizontal
                      ? scrollbarSize
                      : `${visiblePercentage}%`,
                    width: horizontal ? `${visiblePercentage}%` : scrollbarSize,
                  },
                ]}
              />
            )}
          </View>
          <Button
            variant='outside'
            onPress={() => moveScroll(1)}
            disabled={contentFullyVisible}
            style={[styles.scrollbarButton]}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ rotate: horizontal ? '-90deg' : '0deg' }],
              }}
            >
              {Icon}
            </View>
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
    height: scrollbarSize,
    width: scrollbarSize,
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
