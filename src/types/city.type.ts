import { CityName } from '../const';
import { Location } from './location.type';

export type City = {
  location: Location;
  name: CityName;
};
