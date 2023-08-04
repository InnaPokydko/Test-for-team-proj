import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'hooks/themeContext';
import Header from './Header/Header';
import SideBar from './SideBar/Sidebar';
import { selectTheme } from 'redux/theme/selectors';

const App = () => {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider>
      <Header theme={theme}/>
      <SideBar theme={theme}/>
    </ThemeProvider>
  );
};

export default App;
