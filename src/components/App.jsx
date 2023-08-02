import React, { useState } from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import Header from './Header/Header';
import './app.css';

const themes = {
  light: '/light.css',
  dark: '/dark.css',
  violet: '/violet.css',
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={currentTheme}>
      <Header onThemeChange={handleThemeChange} />
    </ThemeSwitcherProvider>
  );
};

export default App;