import React from 'react';
import { ThemeProvider } from 'hooks/themeContext';

import Header from './Header/Header';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};

export default App;
