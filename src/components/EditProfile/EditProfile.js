import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  ModalCloseButton,
  EditProfileModal,
  FormBox,
  PhotoInputWrapper,
  AvatarImage,
  FieldUser,
  FileInput,
  IconPlus,
  IconUserWrapper,
  SaveBtn,
} from './EditProfile.styled';
import { updateProfileData } from 'redux/profileSlice';
import Sprite from '../../svg/sprite.svg';

const EditProfile = ({ theme, onClose }) => {
  const { photo, name, email, password } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const handleFormSubmit = async values => {
    dispatch(updateProfileData(values));
    onClose();
  };

  const handleAvatarClick = () => {
    document.getElementById('newPhotoInput').click();
  };

  return (
    <Container>
      <EditProfileModal className={`theme-${theme}`}>
        <div>Edit profile</div>
        <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
        <Formik
          initialValues={{
            newPhoto: photo,
            newName: name,
            newEmail: email,
            newPassword: password,
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <FormBox>
              <PhotoInputWrapper>
                {values.newPhoto ? (
                  <>
                    <AvatarImage
                      src={values.newPhoto}
                      alt="User Avatar"
                      width="68"
                      height="68"
                      onClick={handleAvatarClick}
                    />
                    <IconPlus onClick={handleAvatarClick}>
                      <use href={`${Sprite}#icon-plus`} />
                    </IconPlus>
                  </>
                ) : (
                  <IconUserWrapper onClick={handleAvatarClick}>
                    <svg className="icon-user" width="68" height="68">
                      <use href={`${Sprite}#icon-user`} />
                    </svg>
                    <IconPlus onClick={handleAvatarClick}>
                      <use href={`${Sprite}#icon-plus`} />
                    </IconPlus>
                  </IconUserWrapper>
                )}
                <FileInput
                  id="newPhotoInput"
                  type="file"
                  name="newPhoto"
                  onChange={event => {
                    setFieldValue(
                      'newPhoto',
                      URL.createObjectURL(event.currentTarget.files[0])
                    );
                  }}
                />
              </PhotoInputWrapper>
              <label>
                <FieldUser type="text" name="newName" className={`theme-${theme}`}/>
                <ErrorMessage name="newName" component="div" />
              </label>
              <label>
                <FieldUser type="email" name="newEmail" className={`theme-${theme}`}/>
                <ErrorMessage name="newEmail" component="div" />
              </label>
              <label>
                <FieldUser type="password" name="newPassword" className={`theme-${theme}`}/>
                <ErrorMessage name="newPassword" component="div" />
              </label>
              <SaveBtn type="submit" className={`theme-${theme}`} disabled={isSubmitting}>
                Save
              </SaveBtn>
            </FormBox>
          )}
        </Formik>
      </EditProfileModal>
    </Container>
  );
};

export default EditProfile;





// import React from 'react';
// import { Formik, Field, ErrorMessage } from 'formik';
// import {
//   Container,
//   ModalCloseButton,
//   EditProfileModal,
//   FormBox,
//   SaveBtn,
// } from './EditProfile.styled';

// const EditProfile = ({ isOpen, onClose, initialValues, onSubmit }) => {

//     return (
//     <Container>
//       {isOpen && (
//         <EditProfileModal>
//           <div>Edit profile</div>
//           <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
//           <Formik
//             initialValues={initialValues}
//             // validationSchema={UserSchema}
//             onSubmit={onSubmit}
//           >
//             {({ isSubmitting }) => (
//               <FormBox>
//                 <label>
//                   <Field type="file" name="newPhoto" />
//                   <ErrorMessage name="newPhoto" component="div" />
//                   {formData.newPhoto && (
//                     <img src={formData.newPhoto} alt="User Avatar" />
//                   )}
//                 </label>
//                 <label>
//                   Name:
//                   <Field type="text" name="newName" />
//                   <ErrorMessage name="newName" component="div" />
//                 </label>
//                 <label>
//                   Email:
//                   <Field type="email" name="newEmail" />
//                   <ErrorMessage name="newEmail" component="div" />
//                 </label>
//                 <label>
//                   Password:
//                   <Field type="password" name="newPassword" />
//                   <ErrorMessage name="newPassword" component="div" />
//                 </label>
//                 <SaveBtn type="submit" disabled={isSubmitting}>
//                   Save
//                 </SaveBtn>
//               </FormBox>
//             )}
//           </Formik>
//         </EditProfileModal>
//       )}
//     </Container>
//   );
// };

// export default EditProfile;
