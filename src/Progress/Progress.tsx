import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';

import { original as theme } from '../common/themes';
import { blockSizes } from '../common/styles';
import { Border } from '../common/styleElements';

type Props = {
  style?: StyleProp<ViewStyle>;
  // come up with a better name than 'raised'
  variant?: 'default' | 'tile' | 'indeterminate';
  percent: number;
};

const tileWidth = 17;

// TODO: accessibility
const Progress = ({ variant = 'default', percent = 0, style = {} }: Props) => {
  const [tilesNumber, setTilesNumber] = useState(0);

  function updateTilesNumber(e: LayoutChangeEvent) {
    const { width } = e.nativeEvent.layout;
    setTilesNumber(Math.round((percent / 100) * (width / tileWidth)));
  }

  return (
    <View
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
          <View style={[styles.tilesWrapper]} onLayout={updateTilesNumber}>
            {Array(tilesNumber)
              .fill(null)
              .map((_, index) => (
                <View style={[styles.tile, styles.progress]} key={index} />
              ))}
          </View>
        ) : (
          <View style={[styles.progress, { width: `${percent}%` }]} />
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
    backgroundColor: theme.progress,
  },
  tilesWrapper: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: theme.material,
  },
  tile: {
    width: tileWidth,
    borderWidth: 1,
    borderColor: theme.material,
  },
});

export default Progress;
