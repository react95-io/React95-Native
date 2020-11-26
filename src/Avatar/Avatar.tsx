import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { original as theme } from '../common/themes';
import { border } from '../common/styles';

export const testId = 'avatar';

type Props = {
  children?: React.ReactNode;
  src?: string;
  size?: number;
  square?: boolean;
  style?: Object;
  noBorder?: boolean;
};

const Avatar = ({
  children = null,
  src = '',
  size = 35,
  square = false,
  style = {},
  noBorder = false
}: Props) => {
  const borderRadiusStyle = { borderRadius: square ? 0 : size / 2 };
  return (
    <View
      style={[
        { width: size, height: size },
        borderRadiusStyle,
        !src && styles.textAvatar,
        !noBorder && { ...styles.border, ...border.wellInverted },
        style
      ]}
      testID={testId}
    >
      {src ? (
        <Image
          source={{ uri: src }}
          resizeMode='contain'
          style={[styles.image, borderRadiusStyle]}
        />
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  },
  textAvatar: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    backgroundColor: theme.material
  }
});

export default Avatar;
