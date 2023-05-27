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
  ProductPopupContent,
} from '../assets/styled/ProductPopup';
import {
  PopupOverlay,
  PopupWrapper,
  PopupHeading,
  PopupBtn,
} from '../assets/styled/TextPopup';
import { Details, Product } from '../types';

interface IProductPopup {
  details: Details;
  product: Product;
}

const ProductPopup: React.FC<IProductPopup> = (props: IProductPopup) => {
  const {
    details: { heading, text },
    product: { img, name, ingredients, price },
  } = props;
  const [count, setCount] = useState<number>(1);

  return (
    <PopupOverlay>
      <PopupWrapper>
        <PopupHeading>{heading}</PopupHeading>
        <ProductPopupContent>
          <ProductInfo>
            <InfoImgWrapper>
              <InfoImg src={require(`../assets/img/products/${img}`)} />
            </InfoImgWrapper>

            <InfoTxtWrapper>
              <InfoTextName>{name}</InfoTextName>
              <InfoTextContents>{ingredients.join()}</InfoTextContents>
            </InfoTxtWrapper>

            <InfoCounterWrapper>
              <InfoCounterMinus
                onClick={() => setCount(Math.max(1, count - 1))}
              >
                -
              </InfoCounterMinus>
              <InfoCounterBody>{count}</InfoCounterBody>
              <InfoCounterPlus onClick={() => setCount(count + 1)}>
                +
              </InfoCounterPlus>
              кг
            </InfoCounterWrapper>

            <InfoCostWrapper>
              <InfoCostHeading>Стоимость:</InfoCostHeading>
              <InfoCostValue>{price * count}</InfoCostValue>
            </InfoCostWrapper>
          </ProductInfo>

          <FormWrapper>FORM</FormWrapper>
        </ProductPopupContent>
        <PopupBtn>X</PopupBtn>
      </PopupWrapper>
    </PopupOverlay>
  );
};

export default ProductPopup;
