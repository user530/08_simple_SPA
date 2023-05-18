import { HeaderSocial, HeaderSocialItem } from '../assets/styled/Header';
import { FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const HeaderSocialComponent: React.FC = () => {
  return (
    <HeaderSocial>
      <HeaderSocialItem>
        <FaVk />
      </HeaderSocialItem>

      <HeaderSocialItem>
        <FaTelegram />
      </HeaderSocialItem>

      <HeaderSocialItem>
        <FaWhatsapp />
      </HeaderSocialItem>
    </HeaderSocial>
  );
};

export default HeaderSocialComponent;
