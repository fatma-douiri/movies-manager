import { FC } from 'react';

import { ReactComponent as LikeSvgIcon } from '../../assets/like.svg?react';
import { formatNumber } from '../../utils/formatNumber';
import SvgIcon from '../svgIcon/SvgIcon';
type LikeDislikeProps = {
  dislikeAction: () => void;
  disliked: boolean;
  dislikes: number;
  likeAction: () => void;
  liked: boolean;
  likes: number;
};
const LikeDislike: FC<LikeDislikeProps> = ({
  dislikeAction,
  likeAction,
  dislikes,
  likes,
  liked,
  disliked,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex rounded-full bg-neutral-100 p-3 mr-3 w-1/3">
        <button onClick={likeAction}>
          <SvgIcon component={LikeSvgIcon} alt="like" color={liked ? 'green' : 'currentColor'} />
        </button>
        <span className="px-3">{formatNumber(likes)}</span>
      </div>
      <div className="flex rounded-full bg-neutral-100 p-3 w-1/3">
        <button onClick={dislikeAction}>
          <SvgIcon
            component={LikeSvgIcon}
            alt="dislike"
            className={`rotate-180`}
            color={disliked ? 'red' : 'currentColor'}
          />
        </button>
        <span className="px-3">{formatNumber(dislikes)}</span>
      </div>
    </div>
  );
};

export default LikeDislike;
