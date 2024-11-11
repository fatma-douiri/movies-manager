export type Movie = {
  category: string;
  dislikes: number;
  id: string;
  likes: number;
  title: string;
};

export enum MovieStatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export type MoviesState = {
  currentPage: number;
  error: string | null;
  itemsPerPage: number;
  movies: Movie[];
  status: MovieStatusEnum;
};

export type TToggleActionPayload = {
  disliked: boolean;
  id: string;
  liked: boolean;
};
