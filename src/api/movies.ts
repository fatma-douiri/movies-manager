import { Movie } from '../types/movie';

const movies: Movie[] = [
  {
    category: 'Comedy',
    dislikes: 1,
    id: '1',
    likes: 4,
    title: 'Oceans 8',
  },
  {
    category: 'Comedy',
    dislikes: 0,
    id: '2',
    likes: 2,
    title: 'Midnight Sun',
  },
  {
    category: 'Animation',
    dislikes: 1,
    id: '3',
    likes: 3,
    title: 'Les indestructibles 2',
  },
  {
    category: 'Thriller',
    dislikes: 6,
    id: '4',
    likes: 6,
    title: 'Sans un bruit',
  },
  {
    category: 'Drame',
    dislikes: 2,
    id: '5',
    likes: 16,
    title: 'Creed II',
  },
  {
    category: 'Thriller',
    dislikes: 3,
    id: '6',
    likes: 11,
    title: 'Pulp Fiction',
  },
  {
    category: 'Thriller',
    dislikes: 32,
    id: '7',
    likes: 12333,
    title: 'Pulp Fiction',
  },
  {
    category: 'Thriller',
    dislikes: 1,
    id: '8',
    likes: 2,
    title: 'Seven',
  },
  {
    category: 'Thriller',
    dislikes: 1,
    id: '9',
    likes: 2,
    title: 'Inception',
  },
  {
    category: 'Thriller',
    dislikes: 12,
    id: '10',
    likes: 22,
    title: 'Gone Girl',
  },
];

const shouldFail = false;

export const movies$ = new Promise<Movie[]>((resolve, reject) => {
  setTimeout(() => {
    if (shouldFail) {
      reject(new Error('Failed to fetch movies.'));
    } else {
      resolve(movies);
    }
  }, 1000);
});
