import { Container } from '../assets/styled/Header';
import {
  AdvItemImage,
  AdvItemLeft,
  AdvItemRight,
  AdvantagesHeading,
  AdvantagesHeadingWrapper,
  AdvantagesImage,
  AdvantagesItem,
  AdvantagesList,
  MainAdvantagesWrapper,
} from '../assets/styled/MainAdvantages';
import advImg1 from '../assets/img/advantage_1.png';
import advImg2 from '../assets/img/advantage_2.png';
import advImg3 from '../assets/img/advantage_3.png';
import advImg4 from '../assets/img/advantage_4.png';
import advBanner from '../assets/img/advantage_img.png';

const MainAdvantages: React.FC = () => {
  const advList = [
    {
      img: advImg1,
      txt: 'Используются только натуральные ингредиенты без полуфабрикатов',
    },
    {
      img: advImg2,
      txt: 'Авторская работа и оригинальный дизайн',
    },
    {
      img: advImg3,
      txt: 'Более 2500 клиентов, 1000 положительных отзывов',
    },
    {
      img: advImg4,
      txt: 'Бесплатная доставка по Москве при заказе от 2 000 рублей',
    },
  ];

  return (
    <MainAdvantagesWrapper>
      <Container>
        <AdvantagesHeadingWrapper>
          <AdvantagesHeading data-text="Преимущества">
            Преимущества
          </AdvantagesHeading>
        </AdvantagesHeadingWrapper>

        <AdvantagesList>
          {advList.map((adv, ind) => (
            <AdvantagesItem key={ind}>
              <AdvItemLeft>
                <AdvItemImage src={adv.img} />
              </AdvItemLeft>
              <AdvItemRight>{adv.txt}</AdvItemRight>
            </AdvantagesItem>
          ))}
        </AdvantagesList>
      </Container>

      <AdvantagesImage src={advBanner} />
    </MainAdvantagesWrapper>
  );
};

export default MainAdvantages;
