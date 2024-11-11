import { useCallback, useState } from 'react';

import { Movie } from '../types/movie';

export const useMovieFilters = (movies: Movie[]) => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  const applyFilter = useCallback(
    (filterFn: (movies: Movie[]) => Movie[]) => {
      setFilteredMovies(filterFn(movies));
    },
    [movies],
  );

  return {
    applyFilter,
    filteredMovies,
  };
};
