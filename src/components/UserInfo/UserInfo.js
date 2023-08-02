import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Avatar } from './UserInfo.styled';
import EditProfile from 'components/EditProfile/EditProfile';

const UserInfo = () => {
  const { photo, name } = useSelector(state => state.profile);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <div>{name}</div>
      <Avatar src={photo} alt="User Avatar" onClick={openModal} />
      {isModalOpen && <EditProfile onClose={closeModal} />}
    </Container>
  );
};

export default UserInfo;

// import React, { useState } from 'react';
// import EditProfile from 'components/EditProfile/EditProfile';
// import { Container } from './UserInfo.styled';

// const UserInfo = ({ photo, name }) => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handleFormSubmit = (values) => {
//     //  API-запит для оновлення профілю з даними values
//     closeModal();
//   };

//   return (
//     <Container>
//       <div>
//         <div>{name}</div>
//         <img src={photo} alt="User Avatar" onClick={openModal} />
//       </div>
//       <EditProfile
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         initialValues={{
//           newPhoto: photo,
//           newName: name,
//           newEmail: '',
//           newPassword: '',
//         }}
//         onSubmit={handleFormSubmit}
//       />
//     </Container>
//   );
// };

// export default UserInfo;