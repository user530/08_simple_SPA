import styled from 'styled-components';
import { SCREENS } from './responsive';

export const SliderWrapper = styled.div`
  max-width: 1515px;
  margin-right: auto;
  margin-left: auto;
`;

export const ProductsCardWrapper = styled.div`
  position: relative;
  max-width: 457px;
  margin-right: auto;
  margin-left: auto;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 189px;
    bottom: 18px;
    border: 1px solid #00b09b;
    z-index: -1;
    border-radius: 20px;

    @media (${SCREENS.md}) {
      max-width: 350px;
      inset: 117px 0px 0px;
    }
  }

  @media (max-width: 1440px) {
    max-width: 420px;
  }

  @media (max-width: 1300px) {
    max-width: 390px;
  }

  @media (${SCREENS.lg}) {
    max-width: 300px;
  }

  @media (${SCREENS.md}) {
    max-width: 350px;
    padding-bottom: 23px;
  }

  @media (${SCREENS.sm}) {
    max-width: 345px;
  }
`;

export const ProductsCardImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ProcuctsCardImg = styled.img`
  height: 375px;
  width: auto;
  object-fit: contain;

  @media (${SCREENS.lg}) {
    height: 340px;
  }

  @media (${SCREENS.md}) {
    height: 290px;
  }

  @media (${SCREENS.sm}) {
    height: 244px;
  }
`;

export const ProductsCardTagList = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 5px;

  @media (${SCREENS.md}) {
    bottom: 0;
  }
`;

export const TagListSpecial = styled.div`
  width: 132px;
  height: 40px;
  background: #d31119;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.7;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #ffffff;
`;
export const TagListNew = styled.div`
  width: 132px;
  height: 40px;
  background: #26b784;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.7;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #ffffff;
`;
export const TagListPopular = styled.div`
  width: 132px;
  height: 40px;
  background: #2660b7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.7;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #ffffff;
`;

export const ProductsCardInfo = styled.div`
  padding-top: 38px;
  display: flex;
  align-items: flex-start;
  padding-left: 33px;
  padding-right: 18px;
  justify-content: space-between;

  @media (${SCREENS.lg}) {
    flex-direction: column;
    row-gap: 10px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const InfoLeftColumn = styled.div`
  width: 38.5%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  text-align: right;

  @media (${SCREENS.lg}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 12px;
    text-align: left;
  }
`;
export const InfoRightColumn = styled.div`
  width: 50%;
  display: flex;

  @media (${SCREENS.lg}) {
    width: 100%;
  }
`;

export const InfoHeading = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.21;
  overflow: hidden;
  flex-grow: 1;
  padding-right: 15px;
  min-height: 45px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (${SCREENS.lg}) {
    font-size: 18px;
  }
`;

export const InfoPrice = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  color: #88c747;
  white-space: nowrap;

  @media (${SCREENS.lg}) {
    text-align: right;
    font-size: 16px;
  }
`;

export const InfoIngredients = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  opacity: 0.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (${SCREENS.md}) {
    font-size: 14px;
  }
`;

export const ProductsCardBtns = styled.div`
  padding-top: 33px;
  display: flex;
  justify-content: center;
  column-gap: 21px;

  @media (${SCREENS.lg}) {
    column-gap: 12px;
  }
`;

export const ProductsCardBtn = styled.button`
  border: 1px solid #96c93d;
  width: 168px;
  height: 46px;
  line-height: 46px;
  border-radius: 16px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04em;

  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};

  @media (${SCREENS.lg}) {
    width: 130px;
  }
`;

ProductsCardBtn.defaultProps = {
  theme: {
    color: '#000000',
    background: '#FFFFFF',
  },
};

export const FilledBtn = {
  color: '#FFFFFF',
  background: 'linear-gradient(180deg, #00B09B 0%, #96C93D 100%)',
};

export const SliderControlBtn = styled.button`
  position: absolute;
  z-index: 10;
  bottom: 0%;
  left: ${(props) => props.theme.left};
  right: ${(props) => props.theme.right};
  transform: translate(0, 120%);
  width: 81px;
  height: 81px;
  border-radius: 50%;
  background: linear-gradient(180deg, #00b09b 0%, #96c93d 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  color: #fff;
  user-select: none;

  @media (${SCREENS.lg}) {
    font-size: 30px;
    width: 50px;
    height: 50px;
  }
`;

SliderControlBtn.defaultProps = {
  theme: {
    right: '60%',
  },
};

export const RightBtnTheme = {
  left: '60%',
};

export const SliderControlDots = styled.ul`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  display: none; // HIDE DOTS

  @media (${SCREENS.md}) {
    margin-top: 30px;
  }
`;

export const SliderControlDot = styled.li`
  list-style-type: none;
  width: 35px;
  height: 5px;
  transition: 3ms;
  background-color: ${(props) => props.theme.color};
`;

SliderControlDot.defaultProps = {
  theme: {
    color: '#d1d1d1',
  },
};

export const SliderDotActive = {
  color: '#96C93D',
};
