import { useState } from 'react';
import {
  FilledBtn,
  InfoHeading,
  InfoIngredients,
  InfoLeftColumn,
  InfoPrice,
  InfoRightColumn,
  ProcuctsCardImg,
  ProductsCardBtn,
  ProductsCardBtns,
  ProductsCardImgWrapper,
  ProductsCardInfo,
  ProductsCardTagList,
  ProductsCardWrapper,
  TagListNew,
  TagListPopular,
  TagListSpecial,
} from '../assets/styled/ProductsSlider';
import { Product } from '../types';
import ProductPopup from './ProductPopup';

interface IProductSliderCard {
  className?: string;
  product: Product;
}

const ProductsSliderCard: React.FC<IProductSliderCard> = (
  props: IProductSliderCard
) => {
  const {
    product: { img, name, price, ingredients, tags },
    className,
  } = props;

  const [orderOpened, setOrderOpened] = useState<boolean>(false);
  const [detailsOpened, setDetailsOpened] = useState<boolean>(false);

  return (
    <ProductsCardWrapper className={className}>
      <ProductsCardImgWrapper>
        <ProcuctsCardImg src={require(`../assets/img/products/${img}`)} />
        <ProductsCardTagList>
          {tags.map((tag, ind) => {
            return tag === 'Новинка' ? (
              <TagListNew key={ind}>{tag}</TagListNew>
            ) : tag === 'Хит продаж' ? (
              <TagListPopular key={ind}>{tag}</TagListPopular>
            ) : tag === 'Акция' ? (
              <TagListSpecial key={ind}>{tag}</TagListSpecial>
            ) : null;
          })}
        </ProductsCardTagList>
      </ProductsCardImgWrapper>

      <ProductsCardInfo>
        <InfoLeftColumn>
          <InfoHeading>{name}</InfoHeading>
          <InfoPrice>{price} руб/кг</InfoPrice>
        </InfoLeftColumn>
        <InfoRightColumn>
          <InfoIngredients>{ingredients.join(', ')}</InfoIngredients>
        </InfoRightColumn>
      </ProductsCardInfo>

      <ProductsCardBtns>
        <ProductsCardBtn onClick={() => setDetailsOpened(true)}>
          Подробнее
        </ProductsCardBtn>
        <ProductsCardBtn theme={FilledBtn} onClick={() => setOrderOpened(true)}>
          Заказать
        </ProductsCardBtn>
      </ProductsCardBtns>

      {orderOpened ? (
        <ProductPopup
          details={{ heading: 'Оформление заказа', text: '' }}
          product={props.product}
        />
      ) : detailsOpened ? (
        <ProductPopup
          details={{ heading: 'Информация о товаре', text: '' }}
          product={props.product}
        />
      ) : null}
    </ProductsCardWrapper>
  );
};

export default ProductsSliderCard;
