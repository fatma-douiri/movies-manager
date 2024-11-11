import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  deleteMovie,
  fetchMovies,
  setCurrentPage,
  setItemsPerPage,
  toggleDislike,
  toggleLike,
} from '../features/movies/moviesSlice';
import { AppDispatch, RootState } from '../store';
import { MovieStatusEnum } from '../types/movie';

export const useMovies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const status = useSelector((state: RootState) => state.movies.status);
  const error = useSelector((state: RootState) => state.movies.error);
  const currentPage = useSelector((state: RootState) => state.movies.currentPage);
  const itemsPerPage = useSelector((state: RootState) => state.movies.itemsPerPage);

  const loadMovies = useCallback(() => {
    if (status === MovieStatusEnum.IDLE) {
      dispatch(fetchMovies());
    }
  }, [status, dispatch, itemsPerPage, currentPage]);

  const handleLike = useCallback(
    (id: string, disliked: boolean, liked: boolean) => {
      dispatch(toggleLike({ disliked, id, liked }));
    },
    [dispatch],
  );

  const handleDislike = useCallback(
    (id: string, liked: boolean, disliked: boolean) => {
      dispatch(toggleDislike({ disliked, id, liked }));
    },
    [dispatch],
  );

  const handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteMovie(id));
    },
    [dispatch],
  );

  const changePage = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch],
  );

  const changeItemsPerPage = useCallback(
    (number: number) => {
      dispatch(setItemsPerPage(number));
    },
    [dispatch],
  );

  return {
    changeItemsPerPage,
    changePage,
    currentPage,
    error,
    handleDelete,
    handleDislike,
    handleLike,
    itemsPerPage,
    loadMovies,
    movies,
    status,
  };
};
