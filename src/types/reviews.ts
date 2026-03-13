export interface Review {
  author: string
  photoUrl?: string
  text: string
  rating: number
  relativeTime: string
  publishTime?: string
}

export interface ReviewsData {
  name: string
  rating: number
  count: number
  reviews: Review[]
}

export interface ReviewsApiResponse {
  name?: string
  rating?: number
  count?: number
  reviews?: Review[]
  error?: string
}





