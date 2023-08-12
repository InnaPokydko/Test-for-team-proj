import styled from "@emotion/styled";
import { Card } from 'react-bootstrap';

export const StyledContainer = styled.div`
background-image: url( https://img.freepik.com/vecteurs-libre/fond-geometrique-degrade_23-2149337509.jpg);
`;

export const StyledCard = styled(Card)`
  // border: none;
  border-radius: 40px 0 40px 0;
  display: flex;
  justify-content: center;
  transition: transform 0.3s;
  margin: 20px;
  width: 190px;
 height: 254px;
 background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);

  &:hover {
    transform: translateY(-10px);
  }
`;

export const StyledCardImg = styled(Card.Img)`
  max-height: 250px;
  object-fit: cover;
`;

export const StyledCardBody = styled(Card.Body)`
  text-align: center;
  width: 200px;
`;

export const StyledCardTitle = styled(Card.Title)`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

export const StyledCardText = styled(Card.Text)`
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  font-size: 1.5rem;
  margin: 0 10px;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;