import {
  FooterContent,
  FooterBtn,
  FooterLogo,
  FooterLogoImg,
  FooterText,
  Wrapper,
} from '../assets/styled/Footer';
import logo from '../assets/img/logo.png';
import { Container } from '../assets/styled/Header';
import { Details } from '../types';
import { useEffect, useState } from 'react';
import TextPopup from './TextPopup';

interface IFooter {
  policy: Details;
}

const Footer: React.FC<IFooter> = (props: IFooter) => {
  const { policy } = props;
  const [policyOpen, setPolicyOpen] = useState<boolean>(false);

  useEffect(() => {
    const bodyOverflow = policyOpen ? 'hidden' : 'scroll';
    document.body.style.overflow = bodyOverflow;
  }, [policyOpen]);

  return (
    <Wrapper>
      <Container>
        <FooterContent>
          <FooterText>Все права защищены. 2022</FooterText>
          <FooterLogo href={'#!'}>
            <FooterLogoImg src={logo} />
          </FooterLogo>
          <FooterBtn onClick={() => setPolicyOpen(!policyOpen)}>
            {policy.heading}
          </FooterBtn>
        </FooterContent>
      </Container>

      {policyOpen ? (
        <TextPopup
          heading={policy.heading}
          text={policy.text}
          closeHandler={() => setPolicyOpen(false)}
        />
      ) : null}
    </Wrapper>
  );
};

export default Footer;
