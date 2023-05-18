import styled, { keyframes } from 'styled-components';
import bannerImg from '../img/main_banner_cake.png';
import { SCREENS } from './responsive';

export const MainBannerWrapper = styled.section`
  position: relative;
  background: linear-gradient(180deg, #00b09b 0%, #96c93d 100%);
  height: 611px;

  @media (${SCREENS.lg}) {
    height: 500px;
  }

  @media (${SCREENS.md}) {
    height: 400px;
  }

  @media (${SCREENS.sm}) {
    height: 374px;
  }
`;

export const BannerContent = styled.div`
  max-width: 532px;
  padding-top: 177px;

  @media (${SCREENS.lg}) {
    max-width: 550px;
    padding-top: 135px;
  }

  @media (${SCREENS.md}) {
    max-width: 480px;
    padding-top: 70px;
  }

  @media (${SCREENS.sm}) {
    max-width: 340px;
    padding-top: 56px;
  }
`;

export const ContentHeading = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.22;
  margin-bottom: 0.8em;

  @media (${SCREENS.lg}) {
    font-size: 32px;
  }

  @media (${SCREENS.md}) {
    font-size: 28px;
  }

  @media (${SCREENS.sm}) {
    font-size: 24px;
  }
`;

export const ContentText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 57px;

  @media (${SCREENS.lg}) {
    margin-bottom: 30px;
  }

  @media (${SCREENS.md}) {
  }

  @media (${SCREENS.sm}) {
    font-size: 14px;
  }
`;

export const ContentBtn = styled.a`
  display: inline-block;
  height: 70px;
  padding: 0 50px;
  background: #dd5514;
  border-radius: 16px;
  color: white;
  line-height: 70px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #dd5514b3;
    color: white;
  }

  @media (${SCREENS.lg}) {
    height: 50px;
    line-height: 50px;
  }
`;

const cakeWiggle = keyframes`
    0% {
      top: -36px;
    }
    50% {
      top: 0px;
    }
    100% {
      top: -36px;
    }
`;

export const BannerImg = styled.img`
  position: absolute;
  top: -36px;
  right: 0;
  height: 726px;
  width: auto;
  filter: drop-shadow(0px 42px 80px rgba(0, 0, 0, 0.3));
  animation-name: ${cakeWiggle};
  animation-duration: 6s;
  animation-iteration-count: infinite;

  @media (${SCREENS.lg}) {
    height: 580px;
  }

  @media (${SCREENS.md}) {
    height: 480px;
  }

  @media (${SCREENS.sm}) {
    display: none;
  }
`;

BannerImg.defaultProps = {
  src: bannerImg,
};
