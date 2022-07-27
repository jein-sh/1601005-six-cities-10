import {Offers} from '../types/offer';

export const offers: Offers = [
  {
    id: '1',
    city: 'Amsterdam',
    price: 120,
    name: 'Beautiful &amp; luxurious studio at great location',
    ratingFull: 4.8,
    type: 'Apartment',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg', 'img/room.jpg', 'img/apartment-03.jpg'],
    features: {
      entire: '',
      bedroom: 3,
      adults: 4,
    },
    inside: ['WiFi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    isPremium: true,
    host: {
      nameHost: 'Angelina',
      status: 'Pro',
      avatarHost: 'img/avatar-angelina.jpg',
      description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']
    },
  },
  {
    id: '2',
    city: 'Amsterdam',
    price: 80,
    name: 'Wood and stone place',
    ratingFull: 4.0,
    type: 'Private room',
    images: ['img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg', 'img/room.jpg', 'img/apartment-03.jpg'],
    features: {
      entire: 'Private room',
      bedroom: 3,
      adults: 4,
    },
    inside: ['', ''],
    isPremium: false,
    host: {
      nameHost: 'Angelina',
      status: 'Pro',
      avatarHost: 'img/avatar-angelina.jpg',
      description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']
    },
  },
  {
    id: '3',
    city: 'Amsterdam',
    price: 132,
    name: 'Canal View Prinsengracht',
    ratingFull: 4.8,
    type: 'Apartment',
    images: ['img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg', 'img/room.jpg', 'img/apartment-03.jpg'],
    features: {
      entire: 'Apartment',
      bedroom: 3,
      adults: 4,
    },
    inside: ['', ''],
    isPremium: false,
    host: {
      nameHost: 'Angelina',
      status: 'Pro',
      avatarHost: 'img/avatar-angelina.jpg',
      description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']
    },
  },
  {
    id: '4',
    city: 'Amsterdam',
    price: 180,
    name: 'Nice, cozy, warm big bed apartment',
    ratingFull: 5.0,
    type: 'Apartment',
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg', 'img/room.jpg', 'img/apartment-03.jpg'],
    features: {
      entire: 'Apartment',
      bedroom: 3,
      adults: 4,
    },
    inside: ['', ''],
    isPremium: true,
    host: {
      nameHost: 'Angelina',
      status: 'Pro',
      avatarHost: 'img/avatar-angelina.jpg',
      description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']
    },
  },
  {
    id: '5',
    city: 'Amsterdam',
    price: 80,
    name: 'Wood and stone place',
    ratingFull: 4.8,
    type: 'Private room',
    images: ['img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg', 'img/room.jpg', 'img/apartment-03.jpg'],
    features: {
      entire: 'Private room',
      bedroom: 3,
      adults: 4,
    },
    inside: ['', ''],
    isPremium: false,
    host: {
      nameHost: 'Angelina',
      status: 'Pro',
      avatarHost: 'img/avatar-angelina.jpg',
      description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']
    },
  },
];
