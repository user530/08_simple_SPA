import { useMediaQuery } from 'react-responsive';
import { Container } from '../assets/styled/Header';
import {
  MainReviewsWrapper,
  ReviewsHeading,
  ReviewsHeadingContainer,
  ReviewsList,
} from '../assets/styled/MainReviews';
import { Review } from '../types';
import { ReviewCard } from '../components';
import Slider from 'react-styled-carousel';
import {
  RightBtnTheme,
  SliderControlBtn,
  SliderControlDots,
} from '../assets/styled/ProductsSlider';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface IMainReviews {
  reviews: Review[];
}

const MainReviews: React.FC<IMainReviews> = (props: IMainReviews) => {
  const { reviews } = props;
  const isMobile = useMediaQuery({ maxWidth: '767px' });

  return (
    <MainReviewsWrapper>
      <Container>
        <ReviewsHeadingContainer>
          <ReviewsHeading data-text={'Отзывы'}>Отзывы</ReviewsHeading>
        </ReviewsHeadingContainer>

        {isMobile ? (
          <Slider
            cardsToShow={1}
            infinite={false}
            padding={'0px'}
            autoSlide={false}
            LeftArrow={
              <SliderControlBtn>
                <BsArrowLeft />
              </SliderControlBtn>
            }
            RightArrow={
              <SliderControlBtn theme={RightBtnTheme}>
                <BsArrowRight />
              </SliderControlBtn>
            }
            DotsWrapper={() => <SliderControlDots />}
          >
            {reviews.map((review, ind) => (
              <ReviewCard key={ind} interview={review} />
            ))}
          </Slider>
        ) : (
          <ReviewsList>
            {reviews.map((review, ind) => (
              <ReviewCard key={ind} interview={review} />
            ))}
          </ReviewsList>
        )}
      </Container>
    </MainReviewsWrapper>
  );
};

export default MainReviews;
