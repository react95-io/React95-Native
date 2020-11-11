import { StyleSheet } from 'react-native';

import { original as theme } from './themes';

const commonBorderStyle = { borderWidth: 2 };

export const border = StyleSheet.create({
  /* createBorderStyles({ invert: false, windowBorders: false }) */
  default: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderLightest,
    borderTopColor: theme.borderLightest,
    borderRightColor: theme.borderDarkest,
    borderBottomColor: theme.borderDarkest
  },
  /* createBorderStyles({ invert: true }) */
  inverted: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderDarkest,
    borderTopColor: theme.borderDarkest,
    borderRightColor: theme.borderLightest,
    borderBottomColor: theme.borderLightest
  },
  /* createBorderStyles({ invert: false, windowBorders: true }) */
  windowBorders: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderLight,
    borderTopColor: theme.borderLight,
    borderRightColor: theme.borderDarkest,
    borderBottomColor: theme.borderDarkest
  },
  /* createWellBorderStyles(false) */
  well: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderLightest,
    borderTopColor: theme.borderLightest,
    borderRightColor: theme.borderDark,
    borderBottomColor: theme.borderDark
  },
  /* createWellBorderStyles(true) */
  wellInverted: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderDark,
    borderTopColor: theme.borderDark,
    borderRightColor: theme.borderLightest,
    borderBottomColor: theme.borderLightest
  }
});

export const box = StyleSheet.create({
  /* createBoxStyles() */
  default: {
    flexDirection: 'row',
    backgroundColor: theme.material,
    color: theme.materialText
  },
  /* createFlatBoxStyles() */
  flat: {
    position: 'relative',
    flexDirection: 'row',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.canvas,
    backgroundColor: theme.canvas
    // outline: 2px solid ${({ theme }) => theme.flatDark};
    // outline-offset: -4px;
  }
});
