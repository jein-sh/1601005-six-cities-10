export type Review = {
  id: number,
  author: string,
  avatar: string,
  rating: number,
  text: string[],
  date: number,
}

export type Reviews = Review[]
