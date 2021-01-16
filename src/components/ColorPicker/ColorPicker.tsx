import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type { Theme, Color } from '../../types';
import { withTheme } from '../../core/theming';

import { Border } from '../../styles/styleElements';

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
  theme: Theme;
  value?: Color;
  wide?: boolean;
};

const ColorPicker = ({
  colors,
  colorsPerRow = 5,
  onChange,
  style,
  theme,
  value,
  wide = false,
  ...rest
}: Props) => {
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
                  styles.colorPreview,
                  {
                    width: (wide ? 1.4 : 1) * colorPreviewSize,
                    height: colorPreviewSize,
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
                    {!isSelected && <Border variant='cutout' theme={theme} />}
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
  colorPreview: {
    width: colorPreviewSize,
    height: colorPreviewSize,
  },
});

export default withTheme(ColorPicker);
