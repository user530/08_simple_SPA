import {
  ReviewCardImg,
  ReviewCardLeftCol,
  ReviewCardName,
  ReviewCardRightCol,
  ReviewCardTxt,
  ReviewCardWrapper,
} from '../assets/styled/ReviewCard';
import { Review } from '../types';

interface IReviewCard {
  interview: Review;
}

const ReviewCard: React.FC<IReviewCard> = (props: IReviewCard) => {
  const {
    interview: { authorImg, authorName, review },
  } = props;

  return (
    <ReviewCardWrapper>
      <ReviewCardLeftCol>
        <ReviewCardImg src={require(`../assets/img/reviews/${authorImg}`)} />
      </ReviewCardLeftCol>
      <ReviewCardRightCol>
        <ReviewCardName>{authorName}</ReviewCardName>
        <ReviewCardTxt>{review}</ReviewCardTxt>
      </ReviewCardRightCol>
    </ReviewCardWrapper>
  );
};

export default ReviewCard;
