import styled from 'styled-components';
import { SCREENS } from './responsive';

export const MainContactsWrapper = styled.section`
  padding-top: 101px;
  padding-bottom: 63px;

  @media (${SCREENS.sm}) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const ContactsHeadingWrapper = styled.div`
  text-align: center;
  position: relative;

  @media (${SCREENS.sm}) {
    text-align: left;
  }
`;

export const ContactsHeading = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;

  &::after {
    content: attr(data-text);
    position: absolute;
    left: 50%;
    bottom: 0;
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

export const ContactsContentWrapper = styled.div`
  padding-top: 71px;
  display: flex;
  column-gap: 10%;

  @media (${SCREENS.sm}) {
    padding-top: 32px;
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const ContactsLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 44.5%;

  @media (${SCREENS.sm}) {
    width: 100%;
    row-gap: 29px;
  }
`;
export const ContactsRightColumn = styled.div`
  width: 55.5%;
  height: 360px;
  flex-shrink: 0;

  @media (${SCREENS.lg}) {
    height: 240px;
  }

  @media (${SCREENS.sm}) {
    width: calc(100% + 30px);
    height: 186px;
    margin-left: -15px;
  }
`;

export const ContactsLeftInformation = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: space-between;

  @media (${SCREENS.sm}) {
    flex-direction: column;
    row-gap: 34px;
  }
`;

export const ContactsLeftButton = styled.button`
  width: 255px;
  height: 70px;
  line-height: 70px;
  background: #dd5514;
  border-radius: 16px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: #ffffff;
`;

export const InformationPhone = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (${SCREENS.sm}) {
    flex-direction: row;
    column-gap: 60px;
  }
`;
export const InformationSocials = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (${SCREENS.sm}) {
    flex-direction: row;
    column-gap: 60px;
  }
`;

export const InformationIconWrapper = styled.div``;

export const InformationHeading = styled.h5`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
`;
export const InformationPhoneNumber = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;
export const InformationSocialIcon = styled.a`
  font-size: 20px;
  & + & {
    padding-left: 17px;
  }
`;
