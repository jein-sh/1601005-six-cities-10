import dayjs from 'dayjs';
import { City } from './types/city';
import {Offer, Offers} from './types/offer';
import { Review } from './types/review';

export const getFilterOffers = (offers: Offers, city : City) => (offers.filter((offer) => offer.city.name === city.name));

export const sortLowToHigt = (offerA : Offer, offerB : Offer) => (offerA.price - offerB.price);

export const sortHigtToLow = (offerA : Offer, offerB : Offer) => (offerB.price - offerA.price);

export const sortRating = (offerA : Offer, offerB : Offer) => (offerB.ratingFull - offerA.ratingFull);

export const sortDate = (commentA : Review, commentB : Review) => dayjs(commentB.date).diff(commentA.date);
