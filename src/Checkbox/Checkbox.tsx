import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Border } from '../common/styleElements';
import { original as theme } from '../common/themes';

import { Text } from '..';

type Props = {
  status: 'checked' | 'unchecked' | 'indeterminate';
  label?: string;
  onPress?: () => void;
  style?: Object;
  disabled?: boolean;
};

const Checkbox = ({
  status,
  label = '',
  onPress = () => {},
  disabled = false,
  style = {}
}: Props) => {
  const renderBox = () => {
    if (status === 'checked') {
      return <Text>-</Text>;
    }

    return <Text> </Text>;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.base,
          { backgroundColor: disabled ? theme.material : theme.canvas },
          style
        ]}
        onPress={onPress}
        activeOpacity={1}
        disabled={disabled}
        accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
        accessibilityComponentType='button'
        accessibilityRole='checkbox'
        accessibilityState={{ disabled, checked: status === 'checked' }}
      >
        <>
          <Border variant='cutout' />
          {renderBox()}
        </>
      </TouchableOpacity>
      {Boolean(label) && <Text>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  base: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 12
  }
});

export default Checkbox;
