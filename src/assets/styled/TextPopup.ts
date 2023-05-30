import styled from 'styled-components';
import { SCREENS } from './responsive';

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 5;
  background-color: #00000066;
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupWrapper = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 52px 58px;
  max-width: 864px;
  max-height: 768px;

  @media (${SCREENS.sm}) {
    padding: 15px;
  }
`;

export const PopupHeading = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  background: linear-gradient(180deg, #00b09b 0%, #96c93d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 21px;
  text-transform: uppercase;
  text-align: center;

  @media (${SCREENS.sm}) {
    padding: 15px;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 0;
  }
`;

export const PopupTextContainer = styled.div`
  padding-right: 15px;
  max-height: 530px;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: block;
    width: 5px;
    height: 20px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    height: 20px;
    border-radius: 10px;
    background: linear-gradient(180deg, #00b09b 0%, #96c93d 100%);
  }

  &::-webkit-scrollbar-track {
    width: 5px;
    background: #dddddd;
  }
`;

export const PopupText = styled.p`
  font-size: 16px;

  @media (${SCREENS.sm}) {
    font-size: 12px;
  }
`;

export const PopupBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
`;
