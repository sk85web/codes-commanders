import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Pagination.module.css';
import { AppDispatch, RootState } from '../../redux/store';
import { POSTS_ON_PAGE } from '../../constants';
import { setCurrentPage } from '../../redux/slices/postsSlice';

const Pagination = () => {
  const navigate = useNavigate();
  const { currentPage, postsList, loading } = useSelector(
    (state: RootState) => state.posts,
  );

  const dispatch: AppDispatch = useDispatch();

  const totalPages = postsList
    ? Math.ceil(postsList.length / POSTS_ON_PAGE)
    : 0;

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    navigate(`?page=${page}`);
  };

  const handleFirstPage = () => handlePageChange(1);
  const handleLastPage = () => handlePageChange(totalPages);
  const handlePrevPage = () => handlePageChange(currentPage - 1);
  const handleNextPage = () => handlePageChange(currentPage + 1);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          type="button"
          key={i}
          className={`${styles['nav-button']} ${
            i === currentPage ? styles.active : ''
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles['nav-button']}
        onClick={handleFirstPage}
        disabled={currentPage === 1 || loading}
      >
        First
      </button>
      <button
        type="button"
        className={styles['nav-button']}
        onClick={handlePrevPage}
        disabled={currentPage === 1 || loading}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        type="button"
        className={styles['nav-button']}
        onClick={handleNextPage}
        disabled={currentPage === totalPages || loading}
      >
        Next
      </button>
      <button
        type="button"
        className={styles['nav-button']}
        onClick={handleLastPage}
        disabled={currentPage === totalPages || loading}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
