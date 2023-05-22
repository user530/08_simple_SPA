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
import advBanner from '../assets/img/advantage_img.png';
import { Advantage } from '../types';

interface IMainAdvantages {
  advantages: Advantage[];
}

const MainAdvantages: React.FC<IMainAdvantages> = (props: IMainAdvantages) => {
  const { advantages } = props;

  return (
    <MainAdvantagesWrapper>
      <Container>
        <AdvantagesHeadingWrapper>
          <AdvantagesHeading data-text="Преимущества">
            Преимущества
          </AdvantagesHeading>
        </AdvantagesHeadingWrapper>

        <AdvantagesList>
          {advantages.map((adv, ind) => (
            <AdvantagesItem key={ind}>
              <AdvItemLeft>
                <AdvItemImage
                  src={require(`../assets/img/advantages/${adv.img}`)}
                />
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
