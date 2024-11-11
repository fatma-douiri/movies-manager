import { FC, useState } from 'react';

import { ReactComponent as DeleteSvgIcon } from '../../assets/delete.svg?react';
import LikeDislike from '../../components/likeDislike/LikeDislike';
import RatioGauge from '../../components/ratioGauge/RatioGauge';
import SvgIcon from '../../components/svgIcon/SvgIcon';
import { useMovies } from '../../hooks/useMovies';
import { Movie } from '../../types/movie';
import { calculateRatioPercent } from '../../utils/calculateRatioPercent';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { handleLike, handleDislike, handleDelete } = useMovies();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    handleLike(movie.id, disliked, liked);
    if (disliked) {
      setDisliked(!disliked);
    }
    setLiked(!liked);
  };

  const handleDislikeClick = () => {
    handleDislike(movie.id, liked, disliked);
    if (liked) {
      setLiked(!liked);
    }
    setDisliked(!disliked);
  };

  return (
    <div className=" bg-white border border-neutral-200 p-3 shadow-md">
      {movie && (
        <div className="flex items-center">
          <div className="pb-3 relative w-full">
            <button onClick={() => handleDelete(movie.id)}>
              <SvgIcon
                component={DeleteSvgIcon}
                size={20}
                className="absolute right-1"
                alt="delete"
              />
            </button>

            <div className="flex flex-col">
              <span className="font-bold">{movie.title}</span>
              <span>Category : {movie.category}</span>
            </div>
          </div>
        </div>
      )}
      <LikeDislike
        likeAction={handleLikeClick}
        dislikeAction={handleDislikeClick}
        likes={movie.likes}
        dislikes={movie.dislikes}
        liked={liked}
        disliked={disliked}
      />
      <RatioGauge ratioPercent={calculateRatioPercent(movie.likes, movie.dislikes)} />
    </div>
  );
};

export default MovieCard;
