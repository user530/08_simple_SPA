import { HeaderMenu, HeaderMenuItem } from '../assets/styled/Header';

interface INavMenu {
  menu: string[];
}

const Navmenu: React.FC<INavMenu> = (props: INavMenu) => {
  const { menu } = props;
  return (
    <HeaderMenu>
      {menu.map((menuItem, ind) => (
        <HeaderMenuItem key={ind}>{menuItem}</HeaderMenuItem>
      ))}
    </HeaderMenu>
  );
};

export default Navmenu;
