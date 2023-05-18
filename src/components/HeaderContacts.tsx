import { HeaderContacts } from '../assets/styled/Header';

interface IHeaderContacts {
  phone: string;
}

const HeaderContactsComponent: React.FC<IHeaderContacts> = (
  props: IHeaderContacts
) => {
  const { phone } = props;

  return <HeaderContacts>{phone}</HeaderContacts>;
};

export default HeaderContactsComponent;
