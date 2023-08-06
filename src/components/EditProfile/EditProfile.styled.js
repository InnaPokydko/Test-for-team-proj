import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  // z-index: 999;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const EditProfileModal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 335px;
padding: 24px;

border-radius: 8px;
box-shadow: 0px 2px 4px 0px rgba(22, 22, 22, 1);
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
// background-color: #1f1f1f;

&.theme-light {
  background-color:#FCFCFC;
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

cubic-bezier(0.4, 0, 0.2, 1)

@media screen and (min-width: 768px) {
  width: 400px;
`;

export const ModalCloseButton = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 14px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 250ms ease-in;
  stroke: #161616;

  &:hover,
  :focus {
  }
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  gap: 14px;
`;

// export const Label = styled.label`
//   font-size: 14px;
//   letter-spacing: -0.28px;
//   width: 100%;
//   height: 49px;
//   padding-left: 18px;
//   font-weight: 400;
//   letter-spacing: -0.28px;
//   // padding: 0 24px; /* Add padding */
//   border: 1px solid #bedbb0; /* Add border */
//   border-radius: 8px;
//   transition: all 500ms;
// `;

export const FieldUser = styled(Field)`
  width: 287px;
    height: 49px;

     opacity: 0.4;
    border: 2px solid #bedbb0;
    padding-left: 18px;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;

    outline: none;
    transition: all 500ms;

    &.theme-light {
      background-color: #FCFCFC;
      color: #161616;
      border: 1px solid #bedbb0;
           }
    
    &.theme-dark {
      background-color: #151515;
      color: #161616;
      border: 1px solid #bedbb0;
             }
    
    &.theme-violet {
      background-color: #FCFCFC;
      color: #FFFFFF;
      border: 1px solid #7B7EDE;
             }
 
    @media screen and (min-width: 768px) {
      width: 352px;
    }
  }
`;

export const PhotoInputWrapper = styled.label`
  width: 68px;
  height: 78px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  // svg {
  //   width: 68px;
  //   height: 68px;
  //   fill: #fff;
  // }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const SaveBtn = styled.button`
  width: 100%;
  height: 49px;
  margin-top: 24px;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  border-radius: 8px;
  cursor: pointer;

  &.theme-light {
    background-color: #bedbb0;
    color: #161616;
    border: 1px solid #bedbb0;

    &:hover,
    &:focus,
    &:active {
      background: #9dc888;
    }
  }

  &.theme-dark {
    background-color: #bedbb0;
    color: #161616;
    border: 1px solid #bedbb0;

    &:hover,
    &:focus,
    &:active {
      background: #9dc888;
    }
  }

  &.theme-violet {
    background-color: #7b7ede;
    color: #ffffff;
    border: 1px solid #7b7ede;

    &:hover,
    &:focus,
    &:active {
      background: #5255bc;
    }
  }

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  display: none;
`;

export const IconPlus = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: #bedbb0;
  border-radius: 8px;
  padding: 4px;
  fill: #161616;
`;

export const IconUserWrapper = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
`;
