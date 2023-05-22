export interface Product {
  name: string;
  img: string;
  price: number;
  ingredients: string[];
  tags: string[];
}

export interface Review {
  authorImg: string;
  authorName: string;
  review: string;
}

export interface Advantage {
  img: string;
  txt: string;
}
