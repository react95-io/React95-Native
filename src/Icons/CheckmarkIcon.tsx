import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ThemeContext } from '../common/theming/Theme';

type Props = {
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const pixelSize = 1.5;
const segmentSize = 3 * pixelSize;

const CheckmarkIcon = ({ disabled = false, style = {}, ...rest }: Props) => {
  const theme = useContext(ThemeContext);

  const segmentOffsets = [2, 3, 4, 3, 2, 1, 0];

  return (
    <View style={[styles.wrapper, style]} {...rest}>
      {segmentOffsets.map((offset, i) => (
        <View
          key={i}
          style={[
            styles.segment,
            {
              marginTop: offset * pixelSize,
              backgroundColor: disabled
                ? theme.checkmarkDisabled
                : theme.checkmark,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
  },
  segment: {
    width: pixelSize,
    height: segmentSize,
  },
});

export default CheckmarkIcon;
