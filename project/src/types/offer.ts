import { City } from "./city"

export type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  nameHost: string,
}

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  }
  maxAdults: number,
  previewImage: string,
  price: number,
  ratingFull: number,
  title: string,
  type: string,
}

export type Offers = Offer[]
