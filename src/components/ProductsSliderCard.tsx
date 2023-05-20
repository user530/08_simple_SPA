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
} from '../assets/styled/ProductsSliderCard';
import { Product } from '../types';

import image from '../assets/img/cake_1.png';

interface IProductSliderCard {
  product: Product;
}

const ProductsSliderCard: React.FC<IProductSliderCard> = (
  props: IProductSliderCard
) => {
  const {
    product: { img, name, price, ingredients, tags },
  } = props;

  return (
    <ProductsCardWrapper>
      <ProductsCardImgWrapper>
        <ProcuctsCardImg src={image} />

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
        <ProductsCardBtn>Подробнее</ProductsCardBtn>
        <ProductsCardBtn theme={FilledBtn}>Заказать</ProductsCardBtn>
      </ProductsCardBtns>
    </ProductsCardWrapper>
  );
};

export default ProductsSliderCard;
