import { createTheming } from '@callstack/react-theme-provider';

import type { Theme } from '../types';
import original from '../styles/themes/original';

export const { ThemeProvider, withTheme, useTheme } = createTheming<Theme>(
  original as Theme,
);
