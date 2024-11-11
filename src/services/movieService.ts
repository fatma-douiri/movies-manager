import { movies$ } from '../api/movies';
import { Movie } from '../types/movie';

export const movieService = {
  getMovies: async (): Promise<Movie[]> => {
    try {
      return await movies$;
    } catch (error) {
      throw new Error('Failed to fetch movies');
    }
  },
};
