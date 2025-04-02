import { CityMap } from '../const';
import { Offer } from '../types/offer.type';

const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: CityMap.Amsterdam,
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
    description: 'A quiet cozy and picturesque place in the heart of Paris.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    maxAdults: 4
  },
  {
    id: 'c8f5b8b4-4b9e-42c2-918c-5a2aaf1f7e31',
    title: 'Modern apartment in the center of Amsterdam',
    type: 'apartment',
    price: 200,
    city: CityMap.Amsterdam,
    location: {
      latitude: 52.5200,
      longitude: 13.4050,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-02.jpg',
    description: 'A stylish and modern apartment in the vibrant center of Berlin.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Washing machine', 'Air conditioning'],
    host: {
      name: 'Anna Schmidt',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    maxAdults: 2
  },
  {
    id: '3d3b537e-8e02-4a3d-bf8e-b3d9ec4e4c29',
    title: 'Cozy house with garden in Amsterdam',
    type: 'house',
    price: 150,
    city: CityMap.Amsterdam,
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    previewImage: 'img/amsterdam.jpg',
    description: 'A comfortable house with a beautiful garden, close to the city center.',
    bedrooms: 4,
    goods: ['Parking', 'Garden', 'Kitchen'],
    host: {
      name: 'Johan de Vries',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true
    },
    images: ['img/apartment-small-03.jpg', 'img/apartment-small-04.jpg'],
    maxAdults: 6
  },
  {
    id: 'a54b4a2e-12cd-453e-97d4-efb768c234d6',
    title: 'Luxury penthouse with a stunning view in Amsterdam',
    type: 'penthouse',
    price: 500,
    city: CityMap.Amsterdam,
    location: {
      latitude: 51.5074,
      longitude: -0.1278,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'img/room-small.jpg',
    description: 'An exclusive penthouse with breathtaking city views.',
    bedrooms: 5,
    goods: ['Swimming pool', 'Gym', 'Sauna'],
    host: {
      name: 'Michael Johnson',
      avatarUrl: 'img/avatar.svg',
      isPro: true
    },
    images: ['img/room-small.jpg', 'img/room.jpg'],
    maxAdults: 8
  }
];

export { offers };
