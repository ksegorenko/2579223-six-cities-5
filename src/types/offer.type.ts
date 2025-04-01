import { User } from './user.type';
import { OfferPreview } from './preview.type';

export type Offer = OfferPreview & {
  bedrooms: number;
  description: string;
  host: User;
  images: string[];
  maxAdults: number;
};
