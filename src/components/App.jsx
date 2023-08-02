import React, { useState } from 'react';
import Header from './Header/Header';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <Header onThemeChange={handleThemeChange} />
  );
};

export default App;