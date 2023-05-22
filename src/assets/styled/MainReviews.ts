import styled from 'styled-components';
import bgImage from '../img/reviews_bg.png';
import { SCREENS } from './responsive';

export const MainReviewsWrapper = styled.section`
  position: relative;
  padding-top: 90px;
  padding-bottom: 81px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #ffffffe6;
  }

  @media (max-width: 1920px) {
    background-position: bottom;
  }

  @media (${SCREENS.lg}) {
    background-image: none;
    padding-top: 70px;
  }
`;

export const ReviewsHeadingContainer = styled.div`
  position: relative;
  padding-top: 90px;
  text-align: center;

  @media (${SCREENS.sm}) {
    text-align: left;
    padding-top: 0;
  }
`;

export const ReviewsHeading = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.22;

  &::after {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 82px;
    color: rgba(0, 0, 0, 0.05);

    @media (${SCREENS.sm}) {
      display: none;
    }
  }

  @media (${SCREENS.sm}) {
    font-size: 24px;
  }
`;

export const ReviewsList = styled.div`
  padding-top: 87px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  row-gap: 81px;
  column-gap: 30px;

  @media (${SCREENS.lg}) {
    padding-top: 57px;
  }
`;
