import React, { useState } from 'react';
import { useTheme } from 'hooks/themeContext';
import UserInfo from 'components/UserInfo/UserInfo';
import { LIGHT, DARK, VIOLET } from 'constants';
import { Container, HeaderNav, MenuIcon, HeaderWrap, SelectIcon } from './Header.styled';
import Sprite from '../../svg/sprite.svg';

const Header = ({ onToggleMenu }) => {
  const { theme, handleThemeChange } = useTheme();
  const [isOptionListOpen, setOptionListOpen] = useState(false);

  const toggleOptionList = () => {
    setOptionListOpen(!isOptionListOpen);
  };

  const onToggleTheme = () => {
    let newTheme = LIGHT;
    if (theme === LIGHT) {
      newTheme = DARK;
    } else if (theme === DARK) {
      newTheme = VIOLET;
    }
    handleThemeChange(newTheme);
  };

  return (
    <Container className={`theme-${theme}`}>
      <div onClick={onToggleMenu}>
        <MenuIcon className="icon-user" width="32" height="32">
          <use href={`${Sprite}#icon-menu`} />
        </MenuIcon>
      </div>
      <HeaderWrap>
        <HeaderNav onClick={toggleOptionList} value={theme}>
          <div>
            <SelectIcon></SelectIcon>
          </div>
          Theme
        </HeaderNav>
        <select value={theme} onChange={onToggleTheme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="violet">Violet</option>
        </select>
        <UserInfo />
      </HeaderWrap>
      
    </Container>
  );
};

export default Header;




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
