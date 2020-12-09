import React, { createContext } from 'react';

import type Theme from './themeType';
import originalTheme from './themes/original';

import {
  border as borderStylesBuilder,
  text as textStylesBuilder,
} from '../styles';

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: Theme;
};

const ThemeContext = createContext({
  ...originalTheme,
  border: borderStylesBuilder(originalTheme),
  text: textStylesBuilder(originalTheme),
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
