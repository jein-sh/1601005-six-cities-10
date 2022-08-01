export type Features = {
  entire: string,
  bedroom: number,
  adults: number,
}

export type Host = {
  nameHost: string,
  status: string,
  avatarHost: string,
  description: string[]
}

export type Offer = {
  id: string,
  city: string,
  price: number,
  name: string,
  ratingFull: number,
  type: string,
  images: string[],
  features: Features,
  inside: string[],
  isPremium: boolean,
  host: Host,
};

export type Offers = Offer[]
