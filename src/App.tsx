import { FC, useEffect, useMemo, useState } from 'react';

import CategoryFilter from './components/categoryFilter/CategoryFilter';
import Loader from './components/loader/Loader';
import Pagination from './components/pagination/Pagination';
import MoviesList from './features/movies/MoviesList';
import { useMovies } from './hooks/useMovies';
import { Movie, MovieStatusEnum } from './types/movie';

const App: FC = () => {
  const { movies, loadMovies, status, error, currentPage, itemsPerPage, changePage } = useMovies();

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const paginatedMovies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredMovies.slice(startIndex, endIndex);
  }, [filteredMovies, currentPage, itemsPerPage]);

  useEffect(() => {
    changePage(1);
  }, [filteredMovies, changePage]);

  if (status === MovieStatusEnum.FAILED) {
    return <p>Error loading movies: {error}</p>;
  }

  return (
    <div
      className={`flex flex-col h-screen p-7 bg-slate-50 text-sm ${status === MovieStatusEnum.LOADING && 'justify-center'}`}
    >
      <div className="flex flex-col overflow-hidden">
        {status === MovieStatusEnum.LOADING ? (
          <Loader />
        ) : (
          <>
            <h1 className="text-center font-bold text-2xl p-3">Movie Management System</h1>
            <CategoryFilter onChange={setFilteredMovies} />
            <MoviesList movies={paginatedMovies} />
            <Pagination total={filteredMovies.length} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
