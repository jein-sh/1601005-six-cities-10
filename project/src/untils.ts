import { City } from './types/city';
import {Offer, Offers} from './types/offer';

export const getFilterOffers = (offers: Offers, city : City) => (offers.filter((offer) => offer.city.nameCity === city.nameCity));

export const sortLowToHigt = (offerA : Offer, offerB : Offer) => (offerA.price - offerB.price);

export const sortHigtToLow = (offerA : Offer, offerB : Offer) => (offerB.price - offerA.price);

export const sortRating = (offerA : Offer, offerB : Offer) => (offerB.ratingFull - offerA.ratingFull);
