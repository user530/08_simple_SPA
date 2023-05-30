import { useState } from 'react';
import {
  FormWrapper,
  InfoCostHeading,
  InfoCostValue,
  InfoCostWrapper,
  InfoCounterBody,
  InfoCounterMinus,
  InfoCounterPlus,
  InfoCounterWrapper,
  InfoImg,
  InfoImgWrapper,
  InfoTextContents,
  InfoTextName,
  InfoTxtWrapper,
  ProductInfo,
  ProductInfoLeft,
  ProductInfoRight,
  ProductPopupContent,
} from '../assets/styled/ProductPopup';
import {
  PopupOverlay,
  PopupWrapper,
  PopupHeading,
  PopupBtn,
} from '../assets/styled/TextPopup';
import { Details, Product } from '../types';
import { TfiClose, TfiMinus, TfiPlus } from 'react-icons/tfi';

export interface IProductPopup {
  details: Details;
  product: Product;
  closeHandler: () => void;
}

const ProductPopup: React.FC<IProductPopup> = (props: IProductPopup) => {
  const {
    details: { heading },
    product: { img, name, ingredients, price },
    closeHandler,
  } = props;
  const [count, setCount] = useState<number>(1);

  return (
    <PopupOverlay>
      <PopupWrapper>
        <PopupHeading>{heading}</PopupHeading>
        <ProductPopupContent>
          <ProductInfo>
            <ProductInfoLeft>
              <InfoImgWrapper>
                <InfoImg src={require(`../assets/img/products/${img}`)} />
              </InfoImgWrapper>

              <InfoTxtWrapper>
                <InfoTextName>{name}</InfoTextName>
                <InfoTextContents>{ingredients.join(', ')}</InfoTextContents>
              </InfoTxtWrapper>
            </ProductInfoLeft>

            <ProductInfoRight>
              <InfoCounterWrapper>
                <InfoCounterMinus
                  onClick={() => setCount(Math.max(1, count - 1))}
                >
                  <TfiMinus />
                </InfoCounterMinus>
                <InfoCounterBody>{count}</InfoCounterBody>
                <InfoCounterPlus onClick={() => setCount(count + 1)}>
                  <TfiPlus />
                </InfoCounterPlus>
                кг
              </InfoCounterWrapper>

              <InfoCostWrapper>
                <InfoCostHeading>Стоимость:</InfoCostHeading>
                <InfoCostValue>{price * count} руб</InfoCostValue>
              </InfoCostWrapper>
            </ProductInfoRight>
          </ProductInfo>

          <FormWrapper>FORM</FormWrapper>
        </ProductPopupContent>
        <PopupBtn onClick={closeHandler}>
          <TfiClose />
        </PopupBtn>
      </PopupWrapper>
    </PopupOverlay>
  );
};

export default ProductPopup;
