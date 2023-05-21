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
      img: 'cake_1.png',
      name: 'Чёрный принц',
      price: 800,
      ingredients: [
        'Клубника',
        'шоколад',
        'сахар',
        'мука',
        'яйца',
        'сливки',
        'сливочный сыр',
      ],
      tags: ['Акция', 'Новинка'],
    },
    {
      img: 'cake_2.png',
      name: 'Наполеон',
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
      img: 'cake_3.png',
      name: 'Клубничка',
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
      tags: ['Хит продаж', 'Новинка'],
    },
    {
      img: 'cake_1.png',
      name: 'Сникерс',
      price: 800,
      ingredients: [
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
      img: 'cake_2.png',
      name: 'Прага',
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
      img: 'cake_3.png',
      name: 'Очень длинное название',
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
