import React from 'react';
// import { Container} from 'react-bootstrap';
import TeamMemberCard from 'components/TeamMemberCard/TeamMemberCard';
import teamMembers from 'teamMembersData';
import { RowContainer, ColCards, ContainerWrap } from './SideBar.styled';


const SideBar = () => {
  return (
    <ContainerWrap>
      <h1 className="text-center my-4">Our Team</h1>
      <RowContainer>
        {teamMembers.map((member, index) => (
          <ColCards key={index} sm={4} className="holder">
            <TeamMemberCard
              name={member.name}
              role={member.role}
              avatar={member.avatar}
              telegram={member.telegram}
              github={member.github}
              linkedin={member.linkedin}
            />
          </ColCards>
        ))}
      </RowContainer>
    </ContainerWrap>
  );
};

export default SideBar

