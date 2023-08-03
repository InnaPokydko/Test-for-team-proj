import { createContext, useContext, useState } from 'react';
import { LIGHT } from 'constants';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};





// import { useState, useEffect } from 'react';

// const useTheme = () => {
//   const [theme, setTheme] = useState('dark');

//   useEffect(() => {
//     // При завантаженні компоненту зчитуємо збережену тему з localStorage (якщо є)
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   useEffect(() => {
//     // При зміні теми зберігаємо її у localStorage
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return { theme, setTheme };
// };

// export default useTheme;