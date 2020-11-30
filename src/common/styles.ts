import { StyleSheet } from 'react-native';

import { original as theme } from './themes';

const commonBorderStyle = { borderWidth: 2 };

export const border = StyleSheet.create({
  /* createBorderStyles({ invert: false, windowBorders: false }) */
  focusSecondaryOutline: {
    ...commonBorderStyle,
    borderStyle: 'dotted',
    borderColor: theme.focusSecondary,
  },
  focusOutline: {
    ...commonBorderStyle,
    borderStyle: 'dotted',
    borderColor: theme.borderDarkest,
  },
  outline: {
    ...commonBorderStyle,
    borderColor: theme.borderDarkest,
  },
  defaultOuter: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderLightest,
    borderTopColor: theme.borderLightest,
    borderRightColor: theme.borderDarkest,
    borderBottomColor: theme.borderDarkest,
  },
  defaultInner: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderLight,
    borderTopColor: theme.borderLight,
    borderRightColor: theme.borderDark,
    borderBottomColor: theme.borderDark,
  },
  outsideOuter: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderLight,
    borderTopColor: theme.borderLight,
    borderRightColor: theme.borderDarkest,
    borderBottomColor: theme.borderDarkest,
  },
  outsideInner: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderLightest,
    borderTopColor: theme.borderLightest,
    borderRightColor: theme.borderDark,
    borderBottomColor: theme.borderDark,
  },

  cutoutOuter: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderDark,
    borderTopColor: theme.borderDark,
    borderRightColor: theme.borderLightest,
    borderBottomColor: theme.borderLightest,
  },
  cutoutInner: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderDarkest,
    borderTopColor: theme.borderDarkest,
    borderRightColor: theme.borderLight,
    borderBottomColor: theme.borderLight,
  },

  /* createWellBorderStyles(false) */
  well: {
    ...commonBorderStyle,
    borderLeftColor: theme.borderLightest,
    borderTopColor: theme.borderLightest,
    borderRightColor: theme.borderDark,
    borderBottomColor: theme.borderDark,
  },
});

export const box = StyleSheet.create({
  /* createBoxStyles() */
  default: {
    flexDirection: 'row',
    backgroundColor: theme.material,
    color: theme.materialText,
  },
  /* createFlatBoxStyles() */
  flat: {
    position: 'relative',
    flexDirection: 'row',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.canvas,
    backgroundColor: theme.canvas,
    // outline: 2px solid ${({ theme }) => theme.flatDark};
    // outline-offset: -4px;
  },
});

export const text = StyleSheet.create({
  default: {
    color: theme.materialText,
    fontSize: 16,
  },
  disabled: {
    fontSize: 16,
    color: theme.materialTextDisabled,
    textShadowColor: theme.materialTextDisabledShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0,
  },
});

export const blockSizes = {
  sm: 27,
  md: 35,
  lg: 43,
};
