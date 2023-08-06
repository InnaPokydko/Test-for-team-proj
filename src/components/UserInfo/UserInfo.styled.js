import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-left: 14px;
`;

export const Avatar = styled.svg`
  width: 32px;
  height: 32px;
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center;
  // &.theme-light {
  //   background-color: #fcfcfc;
  //    }

  // &.theme-dark {
  //   background-color: #161616;
  // }

  // &.theme-violet {
  //   background-color: #ECEDFD;
  // }
   `;

   export const UserIcon = styled.svg`
  width: 32px;
  height: 32px;
  
  &.theme-light {
    background-color: #F6F6F7;
    fill: #FFFFFF;
     }

  &.theme-dark {
    background-color: #161616;
    fill: #FFFFFF;
  }

  &.theme-violet {
    background-color: #ECEDFD;
    fill: #FFFFFF;
  }
   `;
   