import React, { createContext, useState } from 'react';

import type { Theme } from 'react95-native';
import { original } from 'react95-native';

type TLocalThemeContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const LocalThemeContext = createContext<TLocalThemeContext>({
  theme: original,
  setTheme: () => null,
});

type LocalThemeProviderProps = {
  children: React.ReactNode;
};

const LocalThemeProvider = ({ children }: LocalThemeProviderProps) => {
  const [theme, setTheme] = useState(original);

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
