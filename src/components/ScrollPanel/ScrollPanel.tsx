import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../../styles/theming/Theme';

import { Border } from '../../styles/styleElements';
import { Divider } from '../..';

// TODO: add noBottomBorder and noTopBorder prop
type Props = React.ComponentPropsWithRef<typeof ScrollView> & {
  children?: React.ReactNode;
  noBackground?: boolean;
};

const ScrollPanel = ({
  children,
  noBackground,
  style = {},
  ...rest
}: Props) => {
  const theme = React.useContext(ThemeContext);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[
        styles.wrapper,
        {
          backgroundColor: noBackground ? 'transparent' : theme.materialDark,
        },
        style,
      ]}
      {...rest}
    >
      <View style={[styles.borderWrapper]}>
        <Border variant='raised' />
        <View style={[styles.inner, { backgroundColor: theme.material }]}>
          <Divider orientation='vertical' variant='raised' />
          <Divider orientation='vertical' variant='raised' />
          <View style={[styles.content]}>{children}</View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 0,
  },
  inner: {
    padding: 16,
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
