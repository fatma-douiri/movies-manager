// store/moviesSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { movieService } from '../services/movieService';
import { Movie, MoviesState, MovieStatusEnum } from '../types/movie';

// Interface pour les actions de like/dislike
interface ToggleActionPayload {
  disliked: boolean;
  id: string;
  liked: boolean;
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await movieService.getMovies();
  return response;
});

const initialState: MoviesState = {
  currentPage: 1,
  error: null,
  itemsPerPage: 4,
  movies: [],
  status: MovieStatusEnum.IDLE,
};

const moviesSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = MovieStatusEnum.LOADING;
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.status = MovieStatusEnum.SUCCEEDED;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = MovieStatusEnum.FAILED;
        state.error = action.error.message ?? null;
      });
  },
  initialState,
  name: 'movies',
  reducers: {
    deleteMovie: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    // Ici j'utilise ToggleActionPayload au lieu de l'objet littéral
    toggleDislike: (state, action: PayloadAction<ToggleActionPayload>) => {
      const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
      if (index !== -1) {
        const movie = state.movies[index];
        if (action.payload.disliked && movie.dislikes > 0) {
          movie.dislikes -= 1;
        } else movie.dislikes += 1;

        if (action.payload.liked && movie.likes > 0) {
          movie.likes -= 1;
        }
      }
    },
    // Ici aussi j'utilise ToggleActionPayload
    toggleLike: (state, action: PayloadAction<ToggleActionPayload>) => {
      const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
      if (index !== -1) {
        const movie = state.movies[index];
        if (action.payload.liked && movie.likes > 0) {
          movie.likes -= 1;
        } else movie.likes += 1;

        if (action.payload.disliked && movie.dislikes > 0) {
          movie.dislikes -= 1;
        }
      }
    },
  },
});

export const { toggleLike, toggleDislike, deleteMovie, setCurrentPage, setItemsPerPage } =
  moviesSlice.actions;

export default moviesSlice.reducer;
