import { Location } from './location.type';
import { City } from './city.type';

export type OfferPreview = {
  city: City;
  goods: string[];
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  previewImage: string;
  price: number;
  title: string;
  type: string;
};
