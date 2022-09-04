import {name, random, datatype, address, lorem, image, internet, date} from 'faker';
import {Host, Offer} from '../types/offer';
import {cities} from '../cities';
import {Review} from '../types/review';
import { City } from '../types/city';
import { UserData } from '../types/user-data';

export const makeFakeCity = (): City => cities[datatype.number(cities.length - 1)];

export const makeFakeHost = (): Host => ({
  avatarUrl: image.avatar(),
  id: datatype.number(100),
  isPro: datatype.boolean(),
  name: name.findName()
});

export const makeFakeUser = (): UserData => ({
  avatarUrl: image.avatar(),
  email: datatype.string(),
  id: datatype.number(100),
  isPro: datatype.boolean(),
  name: name.findName(),
  token: 'secret',
});

export const makeFakeOffer = (): Offer => ({
  bedrooms: datatype.number({min: 1, max: 5}),
  city: makeFakeCity(),
  description: lorem.sentence(),
  goods: new Array(datatype.number({min: 1, max: 10})).fill(random.word()),
  host: makeFakeHost(),
  id: datatype.number(1000),
  images: new Array(datatype.number({min: 1, max: 6})).fill(image.city()),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: {
    latitude: parseFloat(address.latitude(54, 48, 6)),
    longitude: parseFloat(address.longitude(10, 2, 6)),
    zoom: 12,
  },
  maxAdults: datatype.number({min: 1, max: 5}),
  previewImage: image.city(),
  price: datatype.number({min: 10, max: 10000}),
  rating: datatype.number({min: 1, max: 5, precision: 0.1}),
  title: lorem.words(20),
  type: lorem.words(1),
});

export const makeFakeReview = (): Review => ({
  comment: lorem.words(30),
  date: String(new Date(date.recent())),
  id: datatype.number(),
  rating: datatype.number({min: 1, max: 5}),
  user: {
    avatarUrl: image.avatar(),
    id: datatype.number(100),
    isPro: datatype.boolean(),
    name: name.findName()
  }
});
