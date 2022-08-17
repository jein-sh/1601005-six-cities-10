import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {filterOffers, loadOffers, setDataLoadedStatus} from './action';
import {APIRoute} from '../const';
import { Offers } from '../types/offer.js';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
    dispatch(filterOffers());
  },
);
