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
