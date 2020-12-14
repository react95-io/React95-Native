import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { ThemeContext } from '../common/theming/Theme';

import { Border } from '../common/styleElements';
import { Divider } from '..';

// TODO: where to pass custom styles?
// TODO: add noBottomBorder and noTopBorder prop
type Props = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  noBackground?: boolean;
};

const ScrollPanel = ({ style = {}, children, noBackground }: Props) => {
  const theme = React.useContext(ThemeContext);

  return (
    <View
      style={[
        {
          backgroundColor: noBackground ? 'transparent' : theme.materialDark,
        },
        style,
      ]}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.borderWrapper]}>
          <Border variant='outside' />
          <View style={[styles.inner, { backgroundColor: theme.material }]}>
            <Divider orientation='vertical' variant='raised' />
            <Divider orientation='vertical' variant='raised' />
            <View style={[styles.content]}>{children}</View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    padding: 16,
    // TODO: decide if left padding should be 8 or 16
    paddingLeft: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderWrapper: {
    padding: 4,
    position: 'relative',
    minWidth: '100%',
  },
  content: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ScrollPanel;
