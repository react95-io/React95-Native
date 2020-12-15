import React, { useState, useEffect, useContext } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';

import { ThemeContext } from '../common/theming/Theme';
import { blockSizes } from '../common/styles';
import { Border } from '../common/styleElements';

type Props = React.ComponentPropsWithRef<typeof View> & {
  percent: number;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'tile' | 'indeterminate';
};

const tileWidth = 17;

const Progress = ({
  percent = 0,
  style = {},
  variant = 'default',
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

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
    <View
      {...rest}
      style={[
        styles.wrapper,
        {
          height: blockSizes.md,
        },
        style,
      ]}
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
      <Border variant='cutout' />
    </View>
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

export default Progress;
