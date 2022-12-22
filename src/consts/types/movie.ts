type TEntity = {
  '@type': string;
  url: string;
}

type TPerson = {
  name: string;
} & TEntity;

type TThumbnail = {
  contentUrl: string;
  '@type:': string;
}

type TVideoObject = {
  description: string;
  embedUrl: string;
  name: string;
  thumbnail: TThumbnail[]
}

type TAggregateRating = {
  bestRating: string;
  ratingCount: number;
  ratingValue: number;
  '@type': string;
  worstRating: string;
}
export interface IMovie extends TEntity {
  actor: TPerson[];
  aggregateRating: TAggregateRating;
  contentRating: string;
  "@context": string;
  creator: (TEntity|TPerson)[];
  datePublished: string;
  description: string;
  director: TPerson[];
  duration: string;
  genre: string[];
  image: string;
  keywords: string;
  name: string;
  trailer: TVideoObject
}