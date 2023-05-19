import styled from 'styled-components';
import { SCREENS } from './responsive';

export const MainAboutWrapper = styled.section`
  padding-top: 130px;

  @media (${SCREENS.lg}) {
    padding-top: 100px;
  }

  @media (${SCREENS.sm}) {
    padding-top: 30px;
  }
`;

export const AboutHeadingBlock = styled.div`
  text-transform: uppercase;
  text-align: center;

  @media (${SCREENS.sm}) {
    text-align: left;
  }
`;

export const AboutHeading = styled.h2`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.22;

  @media (${SCREENS.sm}) {
    font-size: 24px;

    &::after {
      display: none;
    }
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50px);
    font-weight: 700;
    font-size: 82px;
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.05);
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 94px;
  column-gap: 34px;

  @media (${SCREENS.sm}) {
    padding-top: 30px;
    flex-direction: column-reverse;
    row-gap: 30px;
  }
`;

export const ContentTextWrapper = styled.div`
  padding: 0 10px;

  @media (${SCREENS.md}) {
    padding: 0;
  }
`;

export const ContentText = styled.p`
  font-style: italic;
  text-align: center;
  font-size: 18px;

  @media (${SCREENS.md}) {
    font-size: 16px;
  }

  & + & {
    margin-top: 32px;
  }
`;
export const ContentImage = styled.img`
  max-height: 515px;
  border-radius: 80px;
  border: 3px solid #00b09b;

  @media (${SCREENS.lg}) {
    max-height: 450px;
  }
`;

export const AboutImage = styled.img`
  position: absolute;
  height: 915px;
  top: -50px;
  left: 0px;
  transform: translateX(-50%);
  filter: drop-shadow(0px 42px 80px rgba(0, 0, 0, 0.3));

  @media (${SCREENS.lg}) {
    display: none;
  }
`;
