import PropTypes from 'prop-types';
import { SectionBox } from './SideBar.styled';

 const SideBar = ({ theme, isOpen }) => (
  <SectionBox className={`theme-${theme} ${isOpen ? 'open' : 'closed'}`}>
    Hello!
  </SectionBox>
);

export default SideBar

SideBar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};