import styled from 'styled-components';
import { SCREENS } from './responsive';

export const Wrapper = styled.footer`
  padding-bottom: 15px;

  @media (${SCREENS.sm}) {
    padding-bottom: 17px;
    padding-top: 17px;
  }
`;

export const FooterContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  font-size: 16px;
  line-height: 1.5;

  @media (${SCREENS.sm}) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    row-gap: 5px;
    font-size: 10px;
    min-height: 30px;
  }
`;

export const FooterText = styled.span``;

export const FooterBtn = styled.button`
  transition: 0.3s;

  &:hover {
    color: #00b09b;
  }
`;

export const FooterLogo = styled.a`
  position: absolute;
  left: 50%;
  transform: translate(-50% -50%);

  @media (${SCREENS.sm}) {
    left: 0;
    transform: none;
  }
`;
export const FooterLogoImg = styled.img`
  @media (${SCREENS.sm}) {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;
