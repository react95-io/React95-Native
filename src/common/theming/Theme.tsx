import React, { createContext } from 'react';

import type { Theme } from '../../types';
import themes from './themes';

import {
  border as borderStylesBuilder,
  text as textStylesBuilder,
} from '../styles';

const defaultTheme = themes.original;

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: Theme;
};

const ThemeContext = createContext({
  ...defaultTheme,
  border: borderStylesBuilder(defaultTheme),
  text: textStylesBuilder(defaultTheme),
});

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider
      value={{
        ...theme,
        border: borderStylesBuilder(theme),
        text: textStylesBuilder(theme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
