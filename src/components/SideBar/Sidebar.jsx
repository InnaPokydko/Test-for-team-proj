
import { SectionBox } from './SideBar.styled';

 const SideBar = ({ theme, isOpen }) => (
  <SectionBox className={`theme-${theme} ${isOpen ? 'open' : 'closed'}`}>
    Hello!
  </SectionBox>
);

export default SideBar

