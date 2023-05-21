import styled from 'styled-components';
import { SCREENS } from './responsive';

export const MainProductsWrapper = styled.section`
  padding-top: 188px;
  padding-right: 15px;
  padding-left: 15px;

  @media (${SCREENS.lg}) {
    padding-top: 150px;
  }

  @media (${SCREENS.md}) {
    padding-top: 100px;
  }

  @media (${SCREENS.sm}) {
    padding-top: 30px;
  }
`;

export const ProductsHeadingWrapper = styled.div`
  text-align: center;
  padding-bottom: 76px;

  @media (${SCREENS.md}) {
    max-width: 540px;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 35px;
  }

  @media (${SCREENS.sm}) {
    padding-left: 0;
    padding-bottom: 35px;
    text-align: left;
  }
`;

export const ProductsHeading = styled.h2`
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.22;

  &::after {
    content: attr(data-text);
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50px);
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
