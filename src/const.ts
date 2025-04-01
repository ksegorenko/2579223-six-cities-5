import { City } from './types/city.type';

export const Setting = {
  CardsCount: 5
};

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Paths {
  Home = '/',
  Login = '/login',
  Offer = 'offer/:id',
  Favorites = '/favorites',
}

export enum CityName {
  Amsterdam = 'Amsterdam',
  Berlin = 'Berlin',
  Paris = 'Paris',
  Bern = 'Bern',
  Moscow = 'Moscow',
  London = 'London'
}

export const CityMap: Record<CityName, City> = {
  [CityName.Amsterdam]: {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  [CityName.Berlin]: {
    name: CityName.Berlin,
    location: {
      latitude: 52.5200066,
      longitude: 13.404954,
      zoom: 8,
    },
  },
  [CityName.Paris]: {
    name: CityName.Paris,
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 8,
    },
  },
  [CityName.Bern]: {
    name: CityName.Bern,
    location: {
      latitude: 46.9481,
      longitude: 7.4474,
      zoom: 8,
    },
  },
  [CityName.Moscow]: {
    name: CityName.Moscow,
    location: {
      latitude: 55.7558,
      longitude: 37.6173,
      zoom: 8,
    },
  },
  [CityName.London]: {
    name: CityName.London,
    location: {
      latitude: 51.5074,
      longitude: -0.1278,
      zoom: 8,
    },
  },
};
