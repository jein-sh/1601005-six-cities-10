import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/city';

export const сityChoice = createAction<{currentCity : City}>('cityChoice');

export const filterOffers = createAction('filterOffers');

export const sortChoice = createAction<{currentSort : string}>('sortChoice');

export const sortOffers = createAction('sortOffers');
