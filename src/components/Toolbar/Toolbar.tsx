import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView as RNScrollView,
  ViewStyle,
  StyleProp,
} from 'react-native';
import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { ChevronIcon } from '../..';

const chevronIconSize = 20;

type ScrollViewProps = React.ComponentProps<typeof View> & {
  children: React.ReactNode;
  scrollViewProps?: React.ComponentProps<typeof RNScrollView>;
  style?: StyleProp<ViewStyle>;
};

// TODO: performance improvements (callbacks, refs ...etc)
const ScrollView = ({
  children,
  scrollViewProps = {},
  style,
  ...rest
}: ScrollViewProps) => {
  const [contentOffset, setContentOffset] = React.useState(0);
  const [contentSize, setContentSize] = React.useState(0);
  const [scrollViewSize, setScrollViewSize] = React.useState(0);

  // TODO: that's a naive approach. if it causes problems
  // trigger a callback when last child becomes fully visible
  const lastElementVisible =
    contentOffset + scrollViewSize < contentSize - chevronIconSize;

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollViewProps.onScroll?.(e);
    setContentOffset(e.nativeEvent.contentOffset.x);
  };

  const handleContentSizeChange = (width: number, height: number) => {
    scrollViewProps.onContentSizeChange?.(width, height);
    setContentSize(width);
  };

  const handleLayout = (e: LayoutChangeEvent) => {
    scrollViewProps.onLayout?.(e);
    setScrollViewSize(e.nativeEvent.layout.width);
  };

  return (
    <View
      style={[
        styles.wrapper,
        {
          flexDirection: 'row',
        },
        style,
      ]}
      {...rest}
    >
      <View style={[styles.content]}>
        <RNScrollView
          {...scrollViewProps}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={100}
          onScroll={handleScroll}
          onContentSizeChange={handleContentSizeChange}
          onLayout={handleLayout}
          horizontal
        >
          {children}
        </RNScrollView>
      </View>
      <View style={styles.chevronIcon}>
        {lastElementVisible && (
          <>
            <ChevronIcon
              segments={3}
              direction='right'
              style={{ marginRight: 1 }}
            />
            <ChevronIcon segments={3} direction='right' />
          </>
        )}
      </View>
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
  chevronIcon: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: chevronIconSize,
  },
});

export default ScrollView;
