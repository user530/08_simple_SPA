import { HeaderSocial, HeaderSocialItem } from '../assets/styled/Header';
import { Social } from '../types';

interface IHeaderSocial {
  socials: Social[];
}

const HeaderSocialComponent: React.FC<IHeaderSocial> = (
  props: IHeaderSocial
) => {
  const { socials } = props;

  return (
    <HeaderSocial>
      {socials.map((social, ind) => (
        <HeaderSocialItem key={ind} href={social.url}>
          <social.icon />
        </HeaderSocialItem>
      ))}
    </HeaderSocial>
  );
};

export default HeaderSocialComponent;
