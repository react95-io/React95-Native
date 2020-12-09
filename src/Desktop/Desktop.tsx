import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Border } from '../common/styleElements';
import { ThemeContext } from '../common/theming/Theme';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Desktop = ({ children, style }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.wrapper]}>
      <View style={[styles.monitor]}>
        <Border variant='outside'>
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
        <View style={[styles.screen, style]}>
          <Border variant='cutout' />
          {children}
        </View>
        <View style={[styles.light]} />
      </View>
      <View style={[styles.stand]}>
        <View
          style={[styles.standSegmentOne, { borderTopColor: theme.borderDark }]}
        >
          <Border variant='outside' />
        </View>
        <View style={[styles.standSegmentTwo]}>
          <Border variant='default' />
        </View>
        <View style={[styles.standSegmentThree]}>
          <Border variant='outside' />
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

export default Desktop;
