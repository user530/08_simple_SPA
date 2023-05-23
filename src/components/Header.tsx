import { Wrapper, Container, HeaderFlex } from '../assets/styled/Header';
import { Social } from '../types';
import {
  HeaderContactsComponent,
  HeaderLogoComponent,
  HeaderMenuComponent,
  HeaderSocialComponent,
} from '../components';

interface IHeader {
  menu: string[];
  contacts: {
    phone: string;
    socials: Social[];
  };
}

const Header: React.FC<IHeader> = (props: IHeader) => {
  const {
    menu,
    contacts: { phone, socials },
  } = props;

  return (
    <Wrapper>
      <Container>
        <HeaderFlex>
          <HeaderLogoComponent />

          <HeaderMenuComponent menu={menu} />

          <HeaderSocialComponent socials={socials} />

          <HeaderContactsComponent phone={phone} />
        </HeaderFlex>
      </Container>
    </Wrapper>
  );
};

export default Header;
