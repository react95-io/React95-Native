import React from 'react';
import { View, ImageBackground, StyleProp, ViewStyle } from 'react-native';
import type { $RemoveChildren, DimensionValue } from '../../types';

import base64hourglass from './base64hourglass';

type Props = $RemoveChildren<typeof View> & {
  // TODO: switch from any size (px / %) to the way we do it in Button(sm | md | lg) ?
  size?: DimensionValue;
  style?: StyleProp<ViewStyle>;
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
