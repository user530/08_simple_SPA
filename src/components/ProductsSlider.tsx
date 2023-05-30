import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Details, Product } from '../types';
import { ProductsSliderCard } from '../components';
import Slider from 'react-styled-carousel';
import {
  RightBtnTheme,
  SliderControlBtn,
  SliderControlDots,
  SliderWrapper,
} from '../assets/styled/ProductsSlider';
import ProductPopup, { IProductPopup } from './ProductPopup';
import { useState } from 'react';

interface IProductsSlider {
  products: Product[];
}

const responsive = [
  { breakPoint: 992, cardsToShow: 3 },
  { breakPoint: 768, cardsToShow: 2 },
  { breakPoint: 425, cardsToShow: 1 },
];

const ProductsSlider: React.FC<IProductsSlider> = (props: IProductsSlider) => {
  const { products } = props;
  const [popupData, setPopupData] = useState<null | IProductPopup>(null);

  const setProductPopup = (product: Product, details: Details) =>
    setPopupData({ product, details, closeHandler: () => setPopupData(null) });

  return (
    <SliderWrapper>
      {popupData ? (
        <ProductPopup
          details={popupData.details}
          product={popupData.product}
          closeHandler={popupData.closeHandler}
        />
      ) : null}

      <Slider
        responsive={responsive}
        infinite={false}
        padding={'0px'}
        autoSlide={false}
        LeftArrow={
          <SliderControlBtn>
            <BsArrowLeft />
          </SliderControlBtn>
        }
        RightArrow={
          <SliderControlBtn theme={RightBtnTheme}>
            <BsArrowRight />
          </SliderControlBtn>
        }
        DotsWrapper={() => <SliderControlDots />}
      >
        {products.map((product, ind) => {
          return (
            <ProductsSliderCard
              key={ind}
              product={product}
              setProductPopup={setProductPopup}
            />
          );
        })}
      </Slider>
    </SliderWrapper>
  );
};

export default ProductsSlider;
