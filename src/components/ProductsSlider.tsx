import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Product } from '../types';
import ProductsSliderCard from './ProductsSliderCard';
import Slider from 'react-styled-carousel';
import {
  RightBtnTheme,
  SliderControlBtn,
  SliderControlDot,
  SliderControlDots,
  SliderDotActive,
  SliderWrapper,
} from '../assets/styled/ProductsSlider';

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

  return (
    <SliderWrapper>
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
          return <ProductsSliderCard key={ind} product={product} />;
        })}
      </Slider>
    </SliderWrapper>
  );
};

export default ProductsSlider;
