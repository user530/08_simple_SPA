import { Wrapper } from '../assets/styled/LandingMain';
import { Advantage, Contacts, Product, Review } from '../types';
import {
  MainAbout,
  MainAdvantages,
  MainBanner,
  MainContacts,
  MainProducts,
  MainReviews,
} from '../components';

interface ILandingMain {
  advantages: Advantage[];
  products: Product[];
  reviews: Review[];
  contacts: Contacts;
}

const LandingMain: React.FC<ILandingMain> = (props: ILandingMain) => {
  const { advantages, contacts, products, reviews } = props;

  return (
    <Wrapper>
      <MainBanner />
      <MainAbout />
      <MainAdvantages advantages={advantages} />
      <MainProducts products={products} />
      <MainReviews reviews={reviews} />
      <MainContacts
        phone={contacts.phone}
        socials={contacts.socials}
        location={contacts.location}
      />
    </Wrapper>
  );
};

export default LandingMain;
