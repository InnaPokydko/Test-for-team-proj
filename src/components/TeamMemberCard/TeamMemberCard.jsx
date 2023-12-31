import React from 'react';
// import { CardGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  StyledCard,
  StyledCardImg,
  StyledCardBody,
  StyledCardTitle,
  StyledCardText,
  SocialLinks,
  SocialIcon,
} from './TeamMemberCard.styled';

const TeamMemberCard = ({ name, role, avatar, telegram, github, linkedin }) => {
  console.log(avatar);
  return (
    <div>
      <StyledCard>
      <StyledCardBody>
        <StyledCardImg variant="top" src={avatar} width="100"/>
        <StyledCardTitle>{name}</StyledCardTitle>
        <StyledCardText>{role}</StyledCardText>
        <SocialLinks>
          {telegram && (
            <SocialIcon href={telegram}>
              <FaTelegram />
            </SocialIcon>
          )}
          {github && (
            <SocialIcon href={github}>
              <FaGithub />
            </SocialIcon>
          )}
          {linkedin && (
            <SocialIcon href={linkedin}>
              <FaLinkedin />
            </SocialIcon>
          )}
        </SocialLinks>
      </StyledCardBody>
    </StyledCard>
    </div>
    
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  telegram: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
};

export default TeamMemberCard;
