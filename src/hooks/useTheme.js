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