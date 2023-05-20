import {
  MainProductsWrapper,
  ProductsHeading,
  ProductsHeadingWrapper,
} from '../assets/styled/MainProducts';
import { Product } from '../types';
import ProductsSlider from './ProductsSlider';

const MainProducts: React.FC = () => {
  const products: Product[] = [
    {
      img: '',
      name: 'Клубничка1',
      price: 800,
      ingredients: [
        'Клубника',
        'шоколад',
        'сахар',
        'мука',
        'яйца',
        'сливки',
        'сливочный сыр',
        'Клубника',
        'шоколад',
        'сахар',
        'мука',
        'яйца',
        'сливки',
        'сливочный сыр',
      ],
      tags: ['Акция'],
    },
    {
      img: '',
      name: 'Клубничка2',
      price: 1000,
      ingredients: [
        'Клубника',
        'шоколад',
        'сахар',
        'мука',
        'яйца',
        'сливки',
        'сливочный сыр',
      ],
      tags: ['Новинка'],
    },
    {
      img: '',
      name: 'Клубничка3',
      price: 950,
      ingredients: [
        'Клубника',
        'шоколад',
        'сахар',
        'мука',
        'яйца',
        'сливки',
        'сливочный сыр',
      ],
      tags: ['Хит продаж'],
    },
  ];

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
