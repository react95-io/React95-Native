import type * as React from 'react';

export type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type $RemoveChildren<T extends React.ComponentType<any>> = $Omit<
  React.ComponentPropsWithoutRef<T>,
  'children'
>;

// TODO: proper Color type
export type Color = string;

export type Sizes = 'sm' | 'md' | 'lg';

export type Orientation = 'horizontal' | 'vertical';

export type Direction = 'up' | 'down' | 'left' | 'right';

export type DimensionValue = undefined | number | string;

export type Theme = {
  name: string;
  anchor: string;
  anchorVisited: string;
  borderDark: string;
  borderDarkest: string;
  borderLight: string;
  borderLightest: string;
  canvas: string;
  canvasText: string;
  canvasTextDisabled: string;
  canvasTextDisabledShadow: string;
  canvasTextInvert: string;
  checkmark: string;
  checkmarkDisabled: string;
  flatDark: string;
  flatLight: string;
  focusSecondary: string;
  headerBackground: string;
  headerNotActiveBackground: string;
  headerNotActiveText: string;
  headerText: string;
  hoverBackground: string;
  material: string;
  materialDark: string;
  materialText: string;
  materialTextDisabled: string;
  materialTextDisabledShadow: string;
  materialTextInvert: string;
  progress: string;
  tooltip: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyValue = any;
