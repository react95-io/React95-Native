import { StyleSheet } from 'react-native';

import type { Theme } from '../types';

export const fontNames = {
  normal: 'MS Sans Serif',
  bold: 'MS Sans Serif Bold',
};

const commonBorderStyle = { borderWidth: 2 };

export const buildBorderStyles = (theme: Theme) =>
  StyleSheet.create({
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
    well: {
      ...commonBorderStyle,
      borderLeftColor: theme.borderLightest,
      borderTopColor: theme.borderLightest,
      borderRightColor: theme.borderDark,
      borderBottomColor: theme.borderDark,
    },
    flat: {
      ...commonBorderStyle,
      borderColor: theme.flatDark,
    },
  });

export const builtTextStyles = (theme: Theme) =>
  StyleSheet.create({
    regular: {
      fontFamily: 'MS Sans Serif',
      fontSize: 16,
    },
    bold: {
      fontFamily: 'MS Sans Serif Bold',
      fontSize: 16,
    },
    secondary: {
      color: theme.materialTextDisabled,
    },
    default: {
      color: theme.materialText,
    },
    disabled: {
      color: theme.materialTextDisabled,
      textShadowColor: theme.materialTextDisabledShadow,
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 0,
    },
  });

export const blockSizes = {
  sm: 28,
  md: 36,
  lg: 44,
};

export function padding(a: number, b?: number, c?: number, d?: number) {
  return {
    paddingTop: a,
    paddingRight: b || a,
    paddingBottom: c || a,
    paddingLeft: d || b || a,
  };
}

export function margin(a: number, b?: number, c?: number, d?: number) {
  return {
    marginTop: a,
    marginRight: b || a,
    marginBottom: c || a,
    marginLeft: d || b || a,
  };
}
