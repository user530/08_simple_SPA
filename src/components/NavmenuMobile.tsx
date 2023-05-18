import React from 'react';
import {
  HamburgerBtnClose,
  HamburgerBtnOpen,
  HamburgerMenu,
  HamburgerMenuContainer,
  HamburgerOpenTheme,
  HeaderMenu,
  HeaderMenuItem,
} from '../assets/styled/Header';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TfiClose } from 'react-icons/tfi';

interface INavMenuMobile {
  menu: string[];
}

const NavMenuMobile: React.FC<INavMenuMobile> = (props: INavMenuMobile) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const { menu } = props;

  return (
    <HamburgerMenu>
      <HamburgerBtnOpen onClick={() => setMenuOpen(true)}>
        <GiHamburgerMenu />
      </HamburgerBtnOpen>

      <HamburgerMenuContainer theme={menuOpen ? HamburgerOpenTheme : null}>
        <HeaderMenu>
          {menu.map((menuItem, ind) => (
            <HeaderMenuItem key={ind} onClick={() => setMenuOpen(false)}>
              {menuItem}
            </HeaderMenuItem>
          ))}
        </HeaderMenu>

        <HamburgerBtnClose onClick={() => setMenuOpen(false)}>
          <TfiClose />
        </HamburgerBtnClose>
      </HamburgerMenuContainer>
    </HamburgerMenu>
  );
};

export default NavMenuMobile;
