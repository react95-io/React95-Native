import React, { createContext } from 'react';

import type Theme from './themeType';
import originalTheme from './themes/original';

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: Theme;
};

const ThemeContext = createContext<Theme>(originalTheme);

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
