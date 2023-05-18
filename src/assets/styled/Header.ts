import styled from 'styled-components';
import { SCREENS } from './responsive';

export const Wrapper = styled.header`
  padding-top: 40px;
  background-color: #fff;

  @media (${SCREENS.sm}) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding: 0 15px;

  @media (${SCREENS.lg}) {
    width: 960px;
  }

  @media (${SCREENS.md}) {
    width: 100%;
  }

  @media (${SCREENS.sm}) {
    width: 100%;
    max-width: 540px;
  }
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const HeaderLogo = styled.a`
  flex-shrink: 0;
  margin-right: 31px;

  @media (${SCREENS.lg}) {
    margin-right: 30px;
  }

  @media (${SCREENS.md}) {
    margin-right: 15px;
  }

  @media (${SCREENS.sm}) {
    margin-right: 26px;
  }
`;

export const HeaderLogoImg = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;

  @media (${SCREENS.lg}) {
    width: 50px;
    height: 50px;
  }

  @media (${SCREENS.md}) {
    width: 40px;
    height: 40px;
  }

  @media (${SCREENS.sm}) {
    width: 30px;
    height: 30px;
  }
`;

export const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 10px;
  column-gap: 25px;
  flex-grow: 1;
  font-family: 'Inter', sans-serif;

  @media (${SCREENS.lg}) {
    column-gap: 20px;
  }

  @media (${SCREENS.md}) {
    column-gap: 15px;
  }

  @media (${SCREENS.sm}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 25px;
    padding: 40px 30px;
    max-width: 250px;
    background-color: #fff;
  }
`;

export const HeaderMenuItem = styled.a`
  font-size: 12px;
  line-height: 17px;
  transition: 0.3s;
  white-space: nowrap;

  &:hover {
    color: #00b09b;
  }
`;

HeaderMenuItem.defaultProps = {
  href: '#!',
};

export const HamburgerMenu = styled.div`
  order: 5;
  margin-left: auto;
`;
export const HamburgerBtnOpen = styled.button`
  display: flex;
  align-items: center;
  font-size: 20px;
`;
export const HamburgerBtnClose = styled.button`
  display: flex;
  align-items: center;
  font-size: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
`;

export const HamburgerMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  backdrop-filter: blur(3px);
  transform: ${(props) => props.theme.transform};
`;

HamburgerMenuContainer.defaultProps = {
  theme: {
    transform: 'translateX(100%)',
  },
};

export const HamburgerOpenTheme = {
  transform: 'translateX(0)',
};

export const HeaderSocial = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-right: 62px;

  @media (${SCREENS.lg}) {
    column-gap: 15px;
    margin-right: 45px;
  }

  @media (${SCREENS.md}) {
    column-gap: 14px;
    margin-right: 35px;
  }

  @media (${SCREENS.sm}) {
    order: 2;
    column-gap: 14px;
    margin-right: 0px;
  }
`;

export const HeaderSocialItem = styled.a`
  display: flex;
  align-items: center;
  color: black;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    color: #00b09b;
  }
`;

HeaderSocialItem.defaultProps = {
  href: '#!',
};

export const HeaderContacts = styled.a`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  transition: 0.3s;

  &:hover {
    color: #00b09b;
  }

  @media (${SCREENS.sm}) {
    order: 1;
    margin-right: 30px;
  }
`;

HeaderContacts.defaultProps = {
  href: 'tel:89008885533',
};
