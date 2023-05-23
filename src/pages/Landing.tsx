import { Footer, Header, LandingMain } from '../components';
import { FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa';
import { Advantage, Contacts, Product, Review } from '../types';

const Landing: React.FC = () => {
  const navMenu = [
    'О кондитере',
    'Преимущества',
    'Продукция',
    'Отзывы',
    'Контакты',
  ];

  const advantages: Advantage[] = [
    {
      img: 'advantage_1.png',
      txt: 'Используются только натуральные ингредиенты без полуфабрикатов',
    },
    {
      img: 'advantage_2.png',
      txt: 'Авторская работа и оригинальный дизайн',
    },
    {
      img: 'advantage_3.png',
      txt: 'Более 2500 клиентов, 1000 положительных отзывов',
    },
    {
      img: 'advantage_4.png',
      txt: 'Бесплатная доставка по Москве при заказе от 2 000 рублей',
    },
  ];

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

  const reviews: Review[] = [
    {
      authorImg: 'review_1.png',
      authorName: 'Георгий',
      review:
        'Остались очень довольны!Очень красивый был торт: и снаружи, и внутри.',
    },
    {
      authorImg: 'review_2.png',
      authorName: 'Екатерина',
      review:
        'Шоколадный торт по случаю Дня Рождения был ну ооочень вкусный и свежий. Гости в восторге просили добавки!',
    },
    {
      authorImg: 'review_3.png',
      authorName: 'Елена',
      review:
        'Заказали торт с капкейками на свадьбу. Все было очень вкусно и красиво.',
    },
    {
      authorImg: 'review_4.png',
      authorName: 'Валери',
      review:
        'Мне все очень понравилось. А особенно джамбори вишневый,торт морковный. Буду заказывать еще!',
    },
    {
      authorImg: 'review_5.png',
      authorName: 'Денис',
      review:
        'Заказал родным здесь торт, и честно ни капельки не пожалел об этом. Торт получился оригинальный с дизайнерской ноткой.',
    },
    {
      authorImg: 'review_6.png',
      authorName: 'Вика',
      review:
        'Остались очень довольны!Очень красивый был торт: и снаружи, и внутри.',
    },
  ];

  const contacts: Contacts = {
    phone: '8-999-255-55-55',
    location: {
      address: 'Мы здесь!',
      coords: {
        lat: 55.760267857171684,
        lng: 37.63042992218846,
      },
    },
    socials: [
      { url: '#!', icon: FaVk },
      { url: '#!', icon: FaTelegram },
      { url: '#!', icon: FaWhatsapp },
    ],
  };

  return (
    <>
      <Header menu={navMenu} contacts={contacts} />
      <LandingMain
        advantages={advantages}
        contacts={contacts}
        products={products}
        reviews={reviews}
      />
      <Footer />
    </>
  );
};

export default Landing;
