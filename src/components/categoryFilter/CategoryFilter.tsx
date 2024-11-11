import { FC, useEffect, useMemo, useState } from 'react';

import { useMovies } from '../../hooks/useMovies';
import { Movie } from '../../types/movie';

type CategoryFilterProps = {
  onChange: (setFilteredMovies: Movie[]) => void;
};

const CategoryFilter: FC<CategoryFilterProps> = ({ onChange }) => {
  const { movies } = useMovies();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(
    () => Array.from(new Set(movies.map((movie) => movie.category))),
    [movies],
  );

  const filteredMovies = useMemo(() => {
    return selectedCategories.length > 0
      ? movies.filter((movie) => selectedCategories.includes(movie.category))
      : movies;
  }, [movies, selectedCategories]);

  const handleCheckboxChange = (category: string) => {
    const currentIndex = selectedCategories.indexOf(category);
    const newSelectedCategories = [...selectedCategories];

    if (currentIndex === -1) {
      newSelectedCategories.push(category);
    } else {
      newSelectedCategories.splice(currentIndex, 1);
    }
    setSelectedCategories(newSelectedCategories);
  };

  useEffect(() => {
    onChange(filteredMovies);
  }, [selectedCategories]);

  return (
    <div className="flex flex-wrap gap-2 p-2 justify-center">
      {categories.map((category) => (
        <label key={category} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
            className="form-checkbox h-5 w-5 accent-neutral-300 cursor-pointer"
          />
          <span>{category}</span>
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;
