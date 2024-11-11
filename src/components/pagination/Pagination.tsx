import { FC } from 'react';

import { ReactComponent as ArrowSvgIcon } from '../../assets/arrow.svg?react';
import { useMovies } from '../../hooks/useMovies';
import SvgIcon from '../svgIcon/SvgIcon';
type PaginationProps = {
  total: number;
};

const Pagination: FC<PaginationProps> = ({ total }) => {
  const { itemsPerPage, currentPage, changePage, changeItemsPerPage } = useMovies();
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="flex justify-center gap-3 items-center w-full">
      <button onClick={() => changePage(currentPage - 1)} disabled={currentPage <= 1}>
        <SvgIcon
          component={ArrowSvgIcon}
          size={12}
          className="rotate-180"
          color={currentPage <= 1 ? 'transparent' : 'fillCurrent'}
          alt="arrow"
        />
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={() => changePage(currentPage + 1)} disabled={currentPage >= totalPages}>
        <SvgIcon
          component={ArrowSvgIcon}
          size={12}
          color={currentPage >= totalPages ? 'transparent' : 'fillCurrent'}
          alt="arrow"
        />
      </button>
      <select
        value={itemsPerPage}
        onChange={(e) => changeItemsPerPage(Number(e.target.value))}
        className="cursor-pointer"
      >
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </select>
    </div>
  );
};

export default Pagination;
