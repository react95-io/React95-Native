import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { Border } from '../../styles/styleElements';

type Props = React.ComponentPropsWithRef<typeof View> & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  screenStyle?: StyleProp<ViewStyle>;
  theme: Theme;
};

const Desktop = ({ children, style, screenStyle, theme, ...rest }: Props) => {
  return (
    <View style={[styles.wrapper, style]} {...rest}>
      <View style={[styles.monitor, { backgroundColor: theme.material }]}>
        <Border theme={theme} variant='raised'>
          <View
            style={[
              styles.monitorShadowBorder,
              { borderColor: theme.borderDark },
            ]}
          >
            <View
              style={[
                styles.monitorShadowBorder,
                { borderColor: theme.borderDark },
              ]}
            />
          </View>
        </Border>
        <View style={[styles.screen, screenStyle]} testID='desktopScreen'>
          <Border theme={theme} variant='cutout' />
          {children}
        </View>
        <View style={[styles.light]} />
      </View>
      <View style={[styles.stand]}>
        <View
          style={[styles.standSegmentOne, { borderTopColor: theme.borderDark }]}
        >
          <Border
            theme={theme}
            variant='raised'
            style={{ backgroundColor: theme.material }}
          />
        </View>
        <View
          style={[styles.standSegmentTwo, { backgroundColor: theme.material }]}
        >
          <Border theme={theme} variant='default' />
        </View>
        <View style={[styles.standSegmentThree]}>
          <Border theme={theme} variant='raised' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: 'auto',
    alignSelf: 'center',
  },
  monitor: {
    position: 'relative',
    zIndex: 1,
    width: 195,
    height: 155,
    padding: 18,
  },
  monitorShadowBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderWidth: 1,
    borderStyle: 'dotted',
    // TODO: left and top dotted border shoulg be of light color
    // borderTopColor: theme.borderLightest,
    // borderLeftColor: theme.borderLightest,
    // borderBottomColor: theme.borderDark,
    // borderRightColor: theme.borderDark,
  },
  screen: {
    flex: 1,
    padding: 4,
  },
  light: {
    position: 'absolute',
    right: 20,
    top: 140,
    width: 10,
    borderWidth: 2,
    borderTopColor: '#4d9046',
    borderBottomColor: '#07ff00',
    borderLeftColor: '#4d9046',
    borderRightColor: '#07ff00',
  },
  stand: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
  standSegmentOne: {
    width: '50%',
    height: 14,
    borderWidth: 2,
    borderColor: 'transparent',
    zIndex: 1,
  },
  standSegmentTwo: {
    width: '40%',
    height: 12,
    position: 'relative',
    top: -4,
  },
  standSegmentThree: {
    width: '75%',
    height: 8,
    position: 'relative',
    top: -6,
  },
});

export default withTheme(Desktop);
