import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {loadComments, loadFavorite, loadOffers, requireAuthorization, setCurrentOffer, setDataLoadedStatus, setNearbyOffers, setUserMail} from './action';
import {APIRoute, AuthorizationStatus} from '../const';
import { Offer, Offers } from '../types/offer.js';
import { dropToken, saveToken } from '../services/token';
import { AuthData, CommentData, FavoriteData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/review.js';

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
  },
);

export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/fetchFavorite',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Favorite);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFavorite(data));
  },
);

export const checkFavoriteAction = createAsyncThunk<void, FavoriteData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/checkFavorite',
  async ({id, status}, {dispatch, extra: api}) => {
    await api.post<Offer>(APIRoute.Favorite.concat(`/${id}/${status}`));
    dispatch(fetchFavoriteAction());
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchCurrentOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.Offers.concat(`/${id}`));
    dispatch(setCurrentOffer(data));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers.concat(`/${id}/nearby`));
    dispatch(setNearbyOffers(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'comments/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(APIRoute.Comments.concat(`/${id}`));
    dispatch(loadComments(data));
  },
);

export const postCommentAction = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'comments/postComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post(APIRoute.Comments.concat(`/${id}`), {comment, rating});
    dispatch(fetchCommentsAction(id));
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserMail(data.email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUserMail(null));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserMail(email));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserMail(null));
  },
);
