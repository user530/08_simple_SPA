import { Container } from '../assets/styled/Header';
import {
  AboutContent,
  ContentTextWrapper,
  ContentText,
  ContentImage,
  AboutHeading,
  AboutHeadingBlock,
  AboutImage,
  MainAboutWrapper,
} from '../assets/styled/MainAbout';
import photo from '../assets/img/about_photo.jpg';
import cake from '../assets/img/about_cake.png';

const MainAbout: React.FC = () => {
  return (
    <MainAboutWrapper>
      <Container>
        <AboutHeadingBlock>
          <AboutHeading data-text="О кондитере">О кондитере</AboutHeading>
        </AboutHeadingBlock>

        <AboutContent>
          <ContentTextWrapper>
            <ContentText>
              Меня зовут Ваитор, я профессиональный повар-кондитер. Более 15 лет
              я работаю в ведущих кондитерских Москвы. 3 года назад открыл
              собственное производство.
            </ContentText>
            <ContentText>
              Создаю не только красивые, но и очень вкусные торты, пирожные,
              капкейки. А ваши фантазия и вдохновение помогают становится им
              настоящими произведениями искусства.
            </ContentText>
            <ContentText>
              Вы можете быть уверены, что при изготовлении вашего неповторимого
              торта, используются только натуральные ингредиенты, свежие ягоды и
              фрукты.
            </ContentText>
          </ContentTextWrapper>
          <ContentImage src={photo} />
        </AboutContent>

        <AboutImage src={cake} />
      </Container>
    </MainAboutWrapper>
  );
};

export default MainAbout;
