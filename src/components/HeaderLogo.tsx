import { HeaderLogo, HeaderLogoImg } from '../assets/styled/Header';
import logo from '../assets/img/logo.png';

const HeaderLogoComponent: React.FC = () => {
  return (
    <HeaderLogo>
      <HeaderLogoImg src={logo} />
    </HeaderLogo>
  );
};

export default HeaderLogoComponent;
