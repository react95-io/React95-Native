import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../styles/theming/Theme';
import { Divider } from '../..';
import Text, { TextProps } from './Text';

type Props = TextProps & {
  align?: 'center' | 'left' | 'right';
};

const Title = ({ align = 'center', children, ...rest }: Props) => {
  const theme = useContext(ThemeContext);

  const getAlignment = () => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'center';
    }
  };

  return (
    <View style={[styles.wrapper]}>
      <Divider style={[styles.divider]} />
      <View
        style={{
          paddingLeft: align !== 'left' ? 8 : 0,
          paddingRight: align !== 'right' ? 8 : 0,
          backgroundColor: theme.material,
          alignSelf: getAlignment(),
        }}
      >
        <Text {...rest}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
  },
  divider: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    transform: [{ translateY: -1 }],
  },
});

export default Title;
