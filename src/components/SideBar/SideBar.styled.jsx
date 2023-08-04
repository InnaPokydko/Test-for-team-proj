import styled from "@emotion/styled";

export const SectionBox = styled.div`
display: flex;
margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6713d2;
  font-size: 24px;

  &.theme-light {
    background-color: #ffffff;
  }

  &.theme-dark {
    background-color: #121212;
  }

  &.theme-violet {
    background-color: #5255bc;
  }
  `