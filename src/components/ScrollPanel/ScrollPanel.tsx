import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { Divider, Panel } from '../..';

// TODO: should we pass theme to wrapped components? (Divider, Panel etc);

// TODO: add noBottomBorder and noTopBorder prop
type Props = React.ComponentPropsWithRef<typeof ScrollView> & {
  children?: React.ReactNode;
  noBackground?: boolean;
  theme: Theme;
};

const ScrollPanel = ({
  children,
  noBackground,
  style = {},
  theme,
  ...rest
}: Props) => {
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
      <Panel theme={theme} variant='raised' style={[styles.borderWrapper]}>
        <View style={[styles.inner, { backgroundColor: theme.material }]}>
          <Divider theme={theme} orientation='vertical' variant='raised' />
          <Divider theme={theme} orientation='vertical' variant='raised' />
          <View style={[styles.content]}>{children}</View>
        </View>
      </Panel>
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

export default withTheme(ScrollPanel);
