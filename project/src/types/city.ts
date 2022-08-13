export type City = {
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  }
  nameCity: string,
}

export type Cities = City[]
