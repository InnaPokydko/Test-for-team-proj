import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import TeamMemberCard from 'components/TeamMemberCard/TeamMemberCard';
import teamMembers from 'teamMembersData';

 const SideBar = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Our Team</h1>
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <TeamMemberCard
              name={member.name}
              role={member.role}
              avatar={member.avatar}
              telegram={member.telegram}
              github={member.github}
              linkedin={member.linkedin}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default SideBar

