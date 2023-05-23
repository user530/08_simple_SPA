import {
  ContactsContentWrapper,
  ContactsHeading,
  ContactsHeadingWrapper,
  ContactsLeftButton,
  ContactsLeftColumn,
  ContactsLeftInformation,
  ContactsRightColumn,
  InformationHeading,
  InformationIconWrapper,
  InformationPhone,
  InformationPhoneNumber,
  InformationSocialIcon,
  InformationSocials,
  MainContactsWrapper,
} from '../assets/styled/MainContacts';
import { Container } from '../assets/styled/Header';
import GoogleMap from 'google-map-react';
import { Location, Social } from '../types';

interface IMainContacts {
  phone: string;
  location: Location;
  socials: Social[];
}

const MainContacts: React.FC<IMainContacts> = (props: IMainContacts) => {
  const { phone, socials, location } = props;

  return (
    <MainContactsWrapper>
      <Container>
        <ContactsHeadingWrapper>
          <ContactsHeading data-text={'Контакты'}>Контакты</ContactsHeading>
        </ContactsHeadingWrapper>

        <ContactsContentWrapper>
          <ContactsLeftColumn>
            <ContactsLeftInformation>
              <InformationPhone>
                <InformationHeading>Телефон</InformationHeading>
                <InformationPhoneNumber>{phone}</InformationPhoneNumber>
              </InformationPhone>

              <InformationSocials>
                <InformationHeading>Соц.сети</InformationHeading>
                <InformationIconWrapper>
                  {socials.map((social, ind) => (
                    <InformationSocialIcon key={ind} href={social.url}>
                      <social.icon />
                    </InformationSocialIcon>
                  ))}
                </InformationIconWrapper>
              </InformationSocials>
            </ContactsLeftInformation>
            <ContactsLeftButton>Задать вопросы</ContactsLeftButton>
          </ContactsLeftColumn>
          <ContactsRightColumn>
            <GoogleMap
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={location.coords}
              defaultZoom={15}
            ></GoogleMap>
          </ContactsRightColumn>
        </ContactsContentWrapper>
      </Container>
    </MainContactsWrapper>
  );
};

export default MainContacts;
