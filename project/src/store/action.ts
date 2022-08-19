import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offers } from '../types/offer';

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setOffersDefaultCity = createAction('setOffersDefaultCity');

export const сityChoice = createAction<{currentCity : City}>('cityChoice');

export const filterOffers = createAction('filterOffers');

export const sortChoice = createAction<{currentSort : string}>('sortChoice');

export const sortOffers = createAction('sortOffers');
