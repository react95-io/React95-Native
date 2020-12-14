import React, { useState, useContext, useRef } from 'react';
import {
  StyleSheet,
  View,
  ScrollView as RNScrollView,
  ViewStyle,
  ImageBackground,
  Image,
} from 'react-native';
import { ThemeContext } from '../common/theming/Theme';

import { Panel, Button } from '..';

type ScrollViewProps = React.ComponentProps<typeof RNScrollView> & {
  style?: ViewStyle;
  children: React.ReactNode;
  alwaysShowScrollbars?: boolean;
};

const scrollbarSize = 30;

const Icon = (
  <Image
    // border to compensate for Border
    style={[
      {
        width: 18,
        height: 18,
        marginTop: 6,
      },
    ]}
    source={{
      uri:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAALElEQVQoU2NkIAIwEqGGgWRF/7GYCjYE3SRkhXA5bNaBFKKIk+wmnB4lyiQAAsgDCqkPxTcAAAAASUVORK5CYII=',
    }}
  />
);

const ScrollView = ({
  children,
  style,
  alwaysShowScrollbars = false,
  ...rest
}: ScrollViewProps) => {
  const theme = useContext(ThemeContext);

  const scrollViewRef = useRef<RNScrollView>(null);
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const scrollElementHeightPercent = 100 * (scrollViewHeight / contentSize);

  const scrollPerc =
    (contentOffset.y / (contentSize - scrollViewHeight)) *
    (100 - scrollElementHeightPercent);

  const thumbPosition = Math.max(
    0,
    Math.min(
      100 - scrollElementHeightPercent,
      parseFloat((scrollPerc || 0).toFixed(3)),
    ),
  );

  const moveScroll = (direction: -1 | 1) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: contentOffset.y + 24 * direction });
    }
  };

  const contentFullyVisible = contentSize <= scrollViewHeight;

  return (
    <View style={[styles.wrapper, style]}>
      <View style={[styles.content]}>
        <RNScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={10}
          ref={scrollViewRef}
          onScroll={e => {
            setContentOffset(e.nativeEvent.contentOffset);
          }}
          onContentSizeChange={(_, height) => {
            setContentSize(height);
          }}
          onLayout={e => {
            setScrollViewHeight(e.nativeEvent.layout.height);
          }}
          {...rest}
        >
          {children}
        </RNScrollView>
      </View>
      {(!contentFullyVisible || alwaysShowScrollbars) && (
        <View
          style={[styles.scrollbarTrack, { backgroundColor: theme.material }]}
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
                // flex: 1,
                transform: [{ translateY: 6 }, { rotate: '180deg' }],
              }}
            >
              {Icon}
            </View>
          </Button>
          <View style={[styles.scrollbar]}>
            {!contentFullyVisible && (
              <Panel
                variant='outside'
                style={[
                  styles.scrollbarBar,
                  {
                    position: 'absolute',
                    top: `${thumbPosition}%`,
                    height: `${scrollElementHeightPercent}%`,
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
                // flex: 1,
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

export default ScrollView;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    position: 'relative',
  },
  content: {
    flexGrow: 1,
    flex: 1,
  },
  scrollbarTrack: {
    height: '100%',
  },
  scrollbarButton: {
    height: scrollbarSize,
    width: scrollbarSize,
    padding: 0,
  },
  scrollbar: {
    // height: '100%',
    width: scrollbarSize,
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
  scrollbarBar: {
    width: '100%',
  },
});
