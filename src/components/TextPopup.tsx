import { useRef } from 'react';
import {
  PopupHeading,
  PopupText,
  PopupOverlay,
  PopupWrapper,
  PopupTextContainer,
  PopupBtn,
} from '../assets/styled/TextPopup';
import { TfiClose } from 'react-icons/tfi';
import { createClosePopup } from '../helpers';

interface ITextPopup {
  heading: string;
  text: string;
  closeHandler: () => void;
}

const TextPopup: React.FC<ITextPopup> = (props: ITextPopup) => {
  const { heading, text, closeHandler } = props;
  const popupRef = useRef<HTMLDivElement>(null);

  const overlayClickHandler = createClosePopup(popupRef, closeHandler);

  return (
    <PopupOverlay onClick={overlayClickHandler}>
      <PopupWrapper ref={popupRef}>
        <PopupHeading>{heading}</PopupHeading>
        <PopupTextContainer>
          <PopupText>{text}</PopupText>
        </PopupTextContainer>
        <PopupBtn>
          <TfiClose onClick={() => closeHandler()} />
        </PopupBtn>
      </PopupWrapper>
    </PopupOverlay>
  );
};

export default TextPopup;
