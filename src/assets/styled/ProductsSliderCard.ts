import styled from 'styled-components';

export const ProductsCardWrapper = styled.div`
  position: relative;
  max-width: 457px;
  flex-shrink: 0;

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
`;

export const ProductsCardTagList = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
  display: flex;
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
  column-gap: 11.5%;
`;

export const InfoLeftColumn = styled.div`
  width: 38.5%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  text-align: right;
`;
export const InfoRightColumn = styled.div`
  width: 50%;
  display: flex;
`;

export const InfoHeading = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.21;
`;
export const InfoPrice = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  color: #88c747;
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
`;

export const ProductsCardBtns = styled.div`
  padding-top: 33px;
  display: flex;
  justify-content: center;
  column-gap: 21px;
`;

export const ProductsCardBtn = styled.button`
  border: 1px solid #96c93d;
  width: 168px;
  height: 46px;
  line-height: 46px;
  border-radius: 16px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
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
