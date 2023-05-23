import {
  FooterContent,
  FooterLink,
  FooterLogo,
  FooterLogoImg,
  FooterText,
  Wrapper,
} from '../assets/styled/Footer';
import logo from '../assets/img/logo.png';
import { Container } from '../assets/styled/Header';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <FooterContent>
          <FooterText>Все права защищены. 2022</FooterText>
          <FooterLogo href={'#!'}>
            <FooterLogoImg src={logo} />
          </FooterLogo>
          <FooterLink>Политика конфиденциальности</FooterLink>
        </FooterContent>
      </Container>
    </Wrapper>
  );
};

export default Footer;
