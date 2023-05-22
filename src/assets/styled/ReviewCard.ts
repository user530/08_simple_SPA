import styled from 'styled-components';
import { SCREENS } from './responsive';

export const ReviewCardWrapper = styled.div`
  display: flex;
  column-gap: 34px;

  @media (${SCREENS.sm}) {
    padding: 31px 0;
  }
`;

export const ReviewCardLeftCol = styled.div`
  flex-shrink: 0;
`;

export const ReviewCardRightCol = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const ReviewCardImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ReviewCardName = styled.h5`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
`;

export const ReviewCardTxt = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.22;
  opacity: 0.6;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;

  @media (${SCREENS.sm}) {
    -webkit-line-clamp: 3;
  }
`;
