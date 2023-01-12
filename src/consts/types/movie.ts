export type TGenre =
  'Adventure'
  | 'Comedy'
  | 'Drama'
  | 'Fantasy'
  | 'Horror'
  | 'Musical'
  | 'Mystery'
  | 'Romance'
  | 'Science Fiction'
  | 'Sports'
  | 'Thriller'
  | 'Western'

export interface IMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: TGenre[];
  runtime: number;
}

export interface IResponse {
  data: IMovie[];
  limit: number;
  offset: number;
  totalAmount: number;
}