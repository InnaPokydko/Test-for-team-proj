import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  max-width: 100%;
  color: #ffffff;
  height: 68px;
  padding: 14px 20px;

  &.theme-light {
    background-color: #fcfcfc;
    color: #161616;
  }

  &.theme-dark {
    background-color: #161616;
    color: #ffffff;
  }

  &.theme-violet {
    background-color: #fff;
    color: #161616;
  }

  @media (max-width: 1440px) {
    padding: 18px 32px;
  }
  @media (max-width: 768px) {
    padding: 18px 24px;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.svg`
  width: 24px;
  height: 24px;

  &.theme-light {
    fill: #161616;
  }

  &.theme-dark {
    fill: #ffffff;
  }

  &.theme-violet {
    fill: #161616;
  }

  @media screen and (min-width: 375px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const SelectIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;

  &.theme-light {
    fill: #161616;
  }

  &.theme-dark {
    fill: #ffffff;
  }

  &.theme-violet {
    fill: #161616;
  }
`;

// export const ThemeBox = styled.svg`
// position: relative;
//  `;

export const ThemeSelector = styled.div`
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 18px 44px 18px 18px;
//   font-family: Poppins;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.28px;
//   border-radius: 8px;
//   border: 1px solid ${(props) => (props.theme === 'dark' ? '#BEDBB0' : '#ECEDFD')};
//   background: ${(props) => (props.theme === 'dark' ? '#151515' : '#FCFCFC')};
//   box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);
//   align-items: center;
//   z-index: 1; 
`;
