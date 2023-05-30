import styled from 'styled-components';
import { SCREENS } from './responsive';

export const ProductPopupContent = styled.div``;

export const ProductInfo = styled.div`
  display: flex;
  column-gap: 50px;

  @media (${SCREENS.sm}) {
    column-gap: 0;
    row-gap: 25px;
    flex-direction: column;
  }
`;

export const ProductInfoLeft = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 50px;

  @media (${SCREENS.sm}) {
    column-gap: 25px;
  }
`;

export const ProductInfoRight = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;

  @media (${SCREENS.sm}) {
    column-gap: 25px;
    justify-content: center;
  }
`;

export const InfoImgWrapper = styled.div`
  flex-shrink: 0;
`;

export const InfoImg = styled.img`
  width: 137px;
  height: 145px;
  object-fit: contain;

  @media (${SCREENS.sm}) {
    width: 80px;
    height: 80px;
  }
`;

export const InfoTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;

  @media (${SCREENS.sm}) {
    row-gap: 14px;
  }
`;
export const InfoTextName = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;

  @media (${SCREENS.sm}) {
    font-size: 16px;
  }
`;

export const InfoTextContents = styled.span`
  line-height: 1.7;

  @media (${SCREENS.sm}) {
    font-size: 12px;
  }
`;

export const InfoCounterWrapper = styled.div`
  width: 140px;
  display: flex;
  align-items: center;

  @media (${SCREENS.sm}) {
    font-size: 12px;
    width: auto;
  }
`;

export const InfoCounterMinus = styled.span`
  padding: 0 10px;
  font-weight: 700;
  font-size: 16px;

  @media (${SCREENS.sm}) {
    padding: 0 5px;
    font-size: 14px;
  }
`;
export const InfoCounterBody = styled.span`
  border: 1px solid #00b09b;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;

  @media (${SCREENS.sm}) {
    padding: 5px 5px;
    font-size: 15px;
  }
`;

export const InfoCounterPlus = styled.span`
  padding: 0 10px;
  font-weight: 700;
  font-size: 16px;

  @media (${SCREENS.sm}) {
    padding: 0 5px;
    font-size: 14px;
  }
`;

export const InfoCostWrapper = styled.div`
  width: 76px;
  display: flex;
  flex-direction: column;

  @media (${SCREENS.sm}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
  }
`;

export const InfoCostHeading = styled.span`
  @media (${SCREENS.sm}) {
    font-size: 14px;
    padding-right: 15px;
  }
`;
export const InfoCostValue = styled.span`
  font-weight: 700;
  font-size: 21px;
  line-height: 1.2;
  color: #88c747;
  white-space: nowrap;

  @media (${SCREENS.sm}) {
    font-size: 15px;
  }
`;

export const FormWrapper = styled.div``;
