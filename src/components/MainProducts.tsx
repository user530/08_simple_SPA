import {
  MainProductsWrapper,
  ProductsHeading,
  ProductsHeadingWrapper,
} from '../assets/styled/MainProducts';
import { Product } from '../types';
import ProductsSlider from './ProductsSlider';

interface IMainProducts {
  products: Product[];
}

const MainProducts: React.FC<IMainProducts> = (props: IMainProducts) => {
  const { products } = props;

  return (
    <MainProductsWrapper>
      <ProductsHeadingWrapper>
        <ProductsHeading data-text={'Продукция'}>Продукция</ProductsHeading>
      </ProductsHeadingWrapper>

      <ProductsSlider products={products} />
    </MainProductsWrapper>
  );
};

export default MainProducts;
