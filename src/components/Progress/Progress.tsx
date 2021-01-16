import React, { useState, useEffect } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { blockSizes } from '../../styles/styles';
import { Panel } from '../..';

type Props = React.ComponentPropsWithRef<typeof View> & {
  background?: 'canvas' | 'material';
  percent: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  variant?: 'default' | 'tile' | 'indeterminate';
};

const tileWidth = 17;

const Progress = ({
  background = 'material',
  percent = 0,
  style = {},
  theme,
  variant = 'default',
  ...rest
}: Props) => {
  const [tilesNumber, setTilesNumber] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  function onProgressWidthChange(e: LayoutChangeEvent) {
    const { width } = e.nativeEvent.layout;
    setProgressWidth(width);
  }

  useEffect(() => {
    setTilesNumber(Math.round((percent / 100) * (progressWidth / tileWidth)));
  }, [percent]);

  return (
    <Panel
      theme={theme}
      variant='cutout'
      background={background}
      {...rest}
      style={[
        styles.wrapper,
        {
          height: blockSizes.md,
        },
        style,
      ]}
      accessible
      accessibilityRole='progressbar'
      accessibilityValue={{
        min: 0,
        max: 100,
        now: percent,
      }}
    >
      <View style={[styles.progressWrapper]}>
        {variant === 'tile' ? (
          <View
            style={[styles.tilesWrapper, { borderColor: theme.material }]}
            onLayout={onProgressWidthChange}
          >
            {Array(tilesNumber)
              .fill(null)
              .map((_, index) => (
                <View
                  style={[
                    styles.tile,
                    styles.progress,
                    {
                      backgroundColor: theme.progress,
                      borderColor: theme.material,
                    },
                  ]}
                  key={index}
                />
              ))}
          </View>
        ) : (
          <View
            style={[
              styles.progress,
              { width: `${percent}%`, backgroundColor: theme.progress },
            ]}
          />
        )}
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    padding: 4,
  },
  progressWrapper: {
    width: '100%',
    height: '100%',
  },
  progress: {
    height: '100%',
  },
  tilesWrapper: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
  },
  tile: {
    width: tileWidth,
    borderWidth: 1,
  },
});

export default withTheme(Progress);
