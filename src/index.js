import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import store from './redux/store';
import App from 'components/App';
import './index.css';

const themes = {
  light: '/light.css',
  dark: '/dark.css',
  violet: '/violet.css',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="dark"> 
    <App />
    </ThemeSwitcherProvider>
         </Provider>
  </React.StrictMode>
);
