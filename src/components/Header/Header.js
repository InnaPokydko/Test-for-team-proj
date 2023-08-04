import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/theme/themeSlice';
import UserInfo from 'components/UserInfo/UserInfo';
import { selectTheme } from 'redux/theme/selectors';
import SideBar from 'components/SideBar/Sidebar';
import {
  Container,
  HeaderNav,
  MenuIcon,
  HeaderWrap,
  SelectIcon,
} from './Header.styled';
import Sprite from '../../svg/sprite.svg';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const [isOptionListOpen, setOptionListOpen] = useState(false);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isThemeSelectorOpen, setThemeSelectorOpen] = useState(false); 

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);
  
  const toggleOptionList = () => {
    setOptionListOpen(!isOptionListOpen);
  };

  const sendThemeToBackend = (newTheme) => {
    localStorage.setItem('theme', newTheme);
  };

  const onToggleTheme = (event) => {
    const newTheme = event.target.value;
    dispatch(setTheme(newTheme));
    sendThemeToBackend(newTheme);
    setThemeSelectorOpen(false);
  };

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen); 
  };

  const toggleThemeSelector = () => {
    setThemeSelectorOpen(!isThemeSelectorOpen);
  };

    return (
    <Container className={`theme-${theme}`}>
      <div onClick={toggleSideBar}>
        <MenuIcon className={`icon-menu theme-${theme}`} width="32" height="32">
          <use href={`${Sprite}#icon-menu`} />
        </MenuIcon>
      </div>
      <HeaderWrap>
        <HeaderNav onClick={toggleOptionList} value={theme}>
          <div>
            <SelectIcon className={`icon-chevron-down theme-${theme}`} onClick={toggleThemeSelector}>
              <use href={`${Sprite}#icon-chevron-down`} />
              </SelectIcon>
          </div>
          Theme
        </HeaderNav>
        {isThemeSelectorOpen && ( 
        <select value={theme} onChange={onToggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="violet">Violet</option>
      </select>
      )}
        <UserInfo />
      </HeaderWrap>
      {isSideBarOpen && <SideBar theme={theme} isOpen={isSideBarOpen} />}
      
    </Container>
  );
};

export default Header;




// import React, { useState } from 'react';
// import { useTheme } from 'hooks/themeContext';
// import UserInfo from 'components/UserInfo/UserInfo';
// import { LIGHT, DARK, VIOLET } from 'constants';
// import { Container, HeaderNav, MenuIcon, HeaderWrap, SelectIcon } from './Header.styled';
// import Sprite from '../../svg/sprite.svg';

// const Header = ({ onToggleMenu }) => {
//   const { theme, handleThemeChange } = useTheme();
//   const [isOptionListOpen, setOptionListOpen] = useState(false);

//   const toggleOptionList = () => {
//     setOptionListOpen(!isOptionListOpen);
//   };

//   const onToggleTheme = () => {
//     let newTheme = LIGHT;
//     if (theme === LIGHT) {
//       newTheme = DARK;
//     } else if (theme === DARK) {
//       newTheme = VIOLET;
//     }
//     handleThemeChange(newTheme);
//   };

//   return (
//     <Container className={`theme-${theme}`}>
//       <div onClick={onToggleMenu}>
//         <MenuIcon className="icon-user" width="32" height="32">
//           <use href={`${Sprite}#icon-menu`} />
//         </MenuIcon>
//       </div>
//       <HeaderWrap>
//         <HeaderNav onClick={toggleOptionList} value={theme}>
//           <div>
//             <SelectIcon></SelectIcon>
//           </div>
//           Theme
//         </HeaderNav>
//         <select value={theme} onChange={onToggleTheme}>
//           <option value="light">Light</option>
//           <option value="dark">Dark</option>
//           <option value="violet">Violet</option>
//         </select>
//         <UserInfo />
//       </HeaderWrap>

//     </Container>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { useThemeSwitcher } from 'react-css-theme-switcher';
// import UserInfo from 'components/UserInfo/UserInfo';
// import { Container, HeaderNav, MenuIcon, SelectIcon } from './Header.styled';

// const Header = ({ onToggleMenu, onThemeChange }) => {
//   const { switcher, currentTheme } = useThemeSwitcher();
//   const [isOptionListOpen, setOptionListOpen] = useState(false);

//   const toggleOptionList = () => {
//     setOptionListOpen(!isOptionListOpen);
//   };

//   const handleThemeChange = event => {
//     const selectedTheme = event.target.value;
//     switcher({ theme: selectedTheme });
//     onThemeChange(selectedTheme);
//   };

//   return (
//     <Container>
//       <div onClick={onToggleMenu}>
//         <div>
//           <MenuIcon></MenuIcon>
//         </div>
//       </div>
//       <div>
//         <HeaderNav onClick={toggleOptionList} value={currentTheme}>
//           <div>
//             <SelectIcon></SelectIcon>
//           </div>
//           Theme
//         </HeaderNav>
//         <select>
//           <option
//             onClick={handleThemeChange}
//             value="light"
//             selected={currentTheme === 'light'}
//           >
//             Light
//           </option>

//           <option
//             onClick={handleThemeChange}
//             value="dark"
//             selected={currentTheme === 'dark'}
//           >
//             Dark
//           </option>

//           <option
//             onClick={handleThemeChange}
//             value="violet"
//             selected={currentTheme === 'violet'}
//           >
//             Violet
//           </option>
//         </select>
//       </div>
//       <UserInfo />
//     </Container>
//   );
// };

// export default Header;
