import { SliderCards, SliderWrapper } from '../assets/styled/ProductsSlider';
import { Product } from '../types';
import ProductsSliderCard from './ProductsSliderCard';
import ProductsSliderControls from './ProductsSliderControls';

interface IProductsSlider {
  products: Product[];
}

const ProductsSlider: React.FC<IProductsSlider> = (props: IProductsSlider) => {
  const { products } = props;
  return (
    <SliderWrapper>
      <SliderCards>
        {products.map((product, ind) => {
          return <ProductsSliderCard key={ind} product={product} />;
        })}
      </SliderCards>

      <ProductsSliderControls size={products.length} active={1} />
    </SliderWrapper>
  );
};

export default ProductsSlider;
