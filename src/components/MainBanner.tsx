import { Container } from '../assets/styled/Header';
import {
  BannerContent,
  BannerImg,
  ContentBtn,
  ContentHeading,
  ContentText,
  MainBannerWrapper,
} from '../assets/styled/MainBanner';

const MainBanner: React.FC = () => {
  return (
    <MainBannerWrapper>
      <Container>
        <BannerContent>
          <ContentHeading>
            Полезные десерты из натуральных продуктов
          </ContentHeading>

          <ContentText>
            Приготовим и привезем за 1 день. Все товары везем в холодильнике.
            Работаем по Москве и Московской области.
          </ContentText>

          <ContentBtn>Подробнее</ContentBtn>
        </BannerContent>
        <BannerImg />
      </Container>
    </MainBannerWrapper>
  );
};

export default MainBanner;
