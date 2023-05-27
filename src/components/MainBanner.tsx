import { useEffect, useState } from 'react';
import { Container } from '../assets/styled/Header';
import {
  BannerContent,
  BannerImg,
  ContentBtn,
  ContentHeading,
  ContentText,
  MainBannerWrapper,
} from '../assets/styled/MainBanner';
import TextPopup from './TextPopup';
import { Details } from '../types';

interface IMainBanner {
  details: Details;
}

const MainBanner: React.FC<IMainBanner> = (props: IMainBanner) => {
  const { heading, text } = props.details;
  const [popupOpened, setPopupOpened] = useState<boolean>(false);

  useEffect(() => {
    const bodyOverflow = popupOpened ? 'hidden' : 'scroll';
    document.body.style.overflow = bodyOverflow;
  }, [popupOpened]);

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

          <ContentBtn onClick={() => setPopupOpened(!popupOpened)}>
            Подробнее
          </ContentBtn>

          {popupOpened ? (
            <TextPopup
              heading={heading}
              text={text}
              closeHandler={() => {
                setPopupOpened(false);
              }}
            />
          ) : null}
        </BannerContent>
        <BannerImg />
      </Container>
    </MainBannerWrapper>
  );
};

export default MainBanner;
