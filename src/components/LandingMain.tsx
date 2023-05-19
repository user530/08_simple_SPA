import { Wrapper } from '../assets/styled/LandingMain';
import MainAbout from './MainAbout';
import MainAdvantages from './MainAdvantages';
import MainBanner from './MainBanner';
import MainContacts from './MainContacts';
import MainProducts from './MainProducts';
import MainReviews from './MainReviews';

const LandingMain: React.FC = () => {
  return (
    <Wrapper>
      <MainBanner />
      <MainAbout />
      <MainAdvantages />
      <MainProducts />
      <MainReviews />
      <MainContacts />
    </Wrapper>
  );
};

export default LandingMain;
