import { IconType } from 'react-icons';

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

export interface Social {
  url: string;
  icon: IconType;
}

export interface Location {
  address: string;
  coords: {
    lat: number;
    lng: number;
  };
}

export interface Contacts {
  phone: string;
  socials: Social[];
  location: Location;
}
