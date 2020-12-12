import { StyleSheet } from 'react-native';

import type Theme from './theming/themeType';

const commonBorderStyle = { borderWidth: 2 };

export const border = (theme: Theme) =>
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
  });

export const text = (theme: Theme) =>
  StyleSheet.create({
    secondary: {
      color: theme.materialTextDisabled,
      fontSize: 16,
    },
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
