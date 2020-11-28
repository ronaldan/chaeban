import React, { createContext, useState } from 'react';
import { Themes } from '../constants';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [theme, setTheme] = useState(Themes.light.colors);
  const [themeType, setThemeType] = useState(Themes.light.type);

  const toggleTheme = (type) => {
    setTheme(Themes[type].colors);
    setThemeType(type);
  };

  const value = {
    theme,
    themeType,
    toggleTheme
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
