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
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const CityMap: Record<CityName, City> = {
  [CityName.Amsterdam]: {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
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
  [CityName.Cologne]: {
    name: CityName.Cologne,
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 8,
    },
  },
  [CityName.Brussels]: {
    name: CityName.Brussels,
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 8,
    },
  },
  [CityName.Hamburg]: {
    name: CityName.Hamburg,
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 8,
    },
  },
  [CityName.Dusseldorf]: {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 8,
    },
  },
};
