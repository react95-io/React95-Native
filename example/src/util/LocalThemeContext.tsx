import React, { createContext, useState } from 'react';
import { themes, Theme } from 'react95-native';

type TLocalThemeContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const LocalThemeContext = createContext<TLocalThemeContext>({
  theme: themes.original,
  setTheme: () => null,
});

type LocalThemeProviderProps = {
  children: React.ReactNode;
};

const LocalThemeProvider = ({ children }: LocalThemeProviderProps) => {
  const [theme, setTheme] = useState(themes.original);

  return (
    <LocalThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </LocalThemeContext.Provider>
  );
};

export { LocalThemeProvider, LocalThemeContext };
