import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer, Offers } from '../types/offer';
import {AuthorizationStatus} from '../const';
import { Reviews } from '../types/review';

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadFavorite = createAction<Offers>('favorite/loadFavorite');

export const loadComments = createAction<Reviews>('comments/loadComments');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setOffersDefaultCity = createAction('setOffersDefaultCity');

export const setCurrentOffer = createAction<Offer | undefined>('offer/setCurrentOffer');

export const setNearbyOffers = createAction<Offers>('offer/setNearbyOffers');

export const сityChoice = createAction<{currentCity : City}>('cityChoice');

export const filterOffers = createAction('filterOffers');

export const sortChoice = createAction<{currentSort : string}>('sortChoice');

export const sortOffers = createAction('sortOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserMail = createAction<string | null>('user/setUserdata');
