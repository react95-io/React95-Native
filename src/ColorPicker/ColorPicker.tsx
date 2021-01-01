import React, { useContext } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type { Color } from '../types';

import { Border } from '../common/styleElements';
import { ThemeContext } from '../common/theming/Theme';

const colorPreviewSize = 34;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function chunk(arr: any[], chunkSize: number) {
  const R = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));
  return R;
}

type Props = {
  colors: Color[];
  colorsPerRow?: number;
  onChange?: (value: Color) => void;
  style?: StyleProp<ViewStyle>;
  value?: Color;
};

const ColorPicker = ({
  colors,
  colorsPerRow = 5,
  onChange,
  style,
  value,
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

  const handleColorPress = (v: Color) => {
    onChange?.(v);
  };
  const rows = chunk(colors, colorsPerRow);

  return (
    <View style={style} {...rest}>
      {rows.map((rowColors, i) => (
        <View style={styles.row} key={i}>
          {rowColors.map(color => {
            // TODO: pick more visible cborders olors for selected item
            const isSelected = color === value;
            return (
              <TouchableHighlight
                key={color}
                onPress={() => handleColorPress(color)}
                style={[
                  styles.color,
                  {
                    borderWidth: 2,
                    borderColor: isSelected
                      ? theme.materialText
                      : 'transparent',
                  },
                ]}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: color,
                    borderWidth: isSelected ? 2 : 0,
                    borderColor: theme.canvas,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      borderWidth: isSelected ? 2 : 0,
                      borderColor: theme.materialText,
                    }}
                  >
                    {!isSelected && <Border variant='cutout' />}
                  </View>
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  color: {
    width: colorPreviewSize,
    height: colorPreviewSize,
  },
});

export default ColorPicker;