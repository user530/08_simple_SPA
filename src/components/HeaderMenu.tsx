import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NavMenuMobile from './NavmenuMobile';
import Navmenu from './Navmenu';

interface IHeaderMenu {
  menu: string[];
}

const HeaderMenuComponent: React.FC<IHeaderMenu> = (props: IHeaderMenu) => {
  const isMobile = useMediaQuery({ maxWidth: '767px' });
  const { menu } = props;

  return isMobile ? <NavMenuMobile menu={menu} /> : <Navmenu menu={menu} />;
};

export default HeaderMenuComponent;
