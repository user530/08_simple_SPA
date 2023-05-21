import styled from 'styled-components';
import { SCREENS } from './responsive';

export const MainAdvantagesWrapper = styled.section`
  padding-top: 255px;
  position: relative;

  @media (${SCREENS.lg}) {
    padding-top: 120px;
  }

  @media (${SCREENS.md}) {
    padding-top: 60px;
  }

  @media (${SCREENS.sm}) {
    padding-top: 30px;
  }
`;

export const AdvantagesHeadingWrapper = styled.div`
  padding-top: 50px;
  text-align: center;

  @media (${SCREENS.sm}) {
    padding-top: 30px;
    text-align: left;
  }
`;

export const AdvantagesHeading = styled.h2`
  text-transform: uppercase;
  position: relative;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.22;

  &::after {
    content: attr(data-text);
    font-size: 82px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50px);
    color: rgba(0, 0, 0, 0.05);

    @media (${SCREENS.sm}) {
      display: none;
    }
  }

  @media (${SCREENS.sm}) {
    font-size: 24px;
  }
`;

export const AdvantagesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding-top: 95px;
  row-gap: 60px;

  @media (max-width: 1759px) {
    grid-template-columns: repeat(2, 40%);
    row-gap: 50px;
  }

  @media (${SCREENS.lg}) {
    grid-template-columns: repeat(2, 50%);
    row-gap: 40px;
  }

  @media (${SCREENS.sm}) {
    grid-template-columns: 1fr;
    padding-top: 30px;
    row-gap: 25px;
  }
`;

export const AdvantagesItem = styled.div`
  position: relative;
  display: flex;
  max-width: 443px;
  align-items: center;
  column-gap: 30px;
  padding-top: 20px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    background: linear-gradient(180deg, #00b09b 0%, #96c93d 100%);
    border-radius: 50%;
    top: 0;
    left: 0;
  }

  &:nth-child(2) {
    p {
      max-width: 290px;
    }
  }
`;

export const AdvItemLeft = styled.div`
  flex-shrink: 0;
  padding-left: 11px;
`;

export const AdvItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: relative;
  z-index: 3;
`;

export const AdvItemRight = styled.p`
  line-height: 1.7;
  padding-right: 60px;
  font-size: 14px;
`;

export const AdvantagesImage = styled.img`
  height: 565px;
  width: 535px;
  object-fit: cover;
  object-position: left;
  position: absolute;
  right: 0;
  top: 84%;
  transform: translateY(-50%);
  filter: drop-shadow(0px 42px 80px rgba(0, 0, 0, 0.3));

  @media (max-width: 1759px) {
    height: 380px;
    width: 360px;
  }

  @media (${SCREENS.lg}) {
    display: none;
  }
`;
