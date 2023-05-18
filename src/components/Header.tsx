import { Wrapper, Container, HeaderFlex } from '../assets/styled/Header';
import HeaderContactsComponent from './HeaderContacts';
import HeaderLogoComponent from './HeaderLogo';
import HeaderMenuComponent from './HeaderMenu';
import HeaderSocialComponent from './HeaderSocial';

const Header: React.FC = () => {
  const menu = [
    'О кондитере',
    'Преимущества',
    'Продукция',
    'Отзывы',
    'Контакты',
  ];
  const phone = '8-900-888-55-33';

  return (
    <Wrapper>
      <Container>
        <HeaderFlex>
          <HeaderLogoComponent />

          <HeaderMenuComponent menu={menu} />

          <HeaderSocialComponent />

          <HeaderContactsComponent phone={phone} />
        </HeaderFlex>
      </Container>
    </Wrapper>
  );
};

export default Header;
