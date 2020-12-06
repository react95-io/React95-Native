import React from 'react';
import { View, ImageBackground, ViewStyle } from 'react-native';

import base64hourglass from './base64hourglass';

type Props = {
  // TODO: switch from any size (px / %) to the way we do it in Button(sm | md | lg) ?
  size?: string | number;
  style?: ViewStyle;
};

const Hourglass = ({ size = 30, style, ...rest }: Props) => {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
      {...rest}
    >
      <ImageBackground
        style={[
          {
            width: '100%',
            height: '100%',
          },
        ]}
        imageStyle={{
          resizeMode: 'cover',
        }}
        source={{
          uri: base64hourglass,
        }}
      />
    </View>
  );
};

export default Hourglass;
