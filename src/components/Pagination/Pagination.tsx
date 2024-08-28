import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Pagination.module.css';
import { AppDispatch, RootState } from '../../redux/store';
import { POSTS_ON_PAGE } from '../../constants';
import { setCurrentPage } from '../../redux/slices/postsSlice';
import Button from '../Button/Button';

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
        <Button
          type="button"
          key={i}
          className={`${styles['nav-button']} ${
            i === currentPage ? styles.active : ''
          }`}
          onClick={() => handlePageChange(i)}
          text={i.toString()}
        />,
      );
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <Button
        type="button"
        className={styles['nav-button']}
        onClick={handleFirstPage}
        text="First"
        isDisabled={currentPage === 1 || loading}
      />

      <Button
        type="button"
        className={styles['nav-button']}
        onClick={handlePrevPage}
        text="Prev"
        isDisabled={currentPage === 1 || loading}
      />
      {renderPageNumbers()}

      <Button
        type="button"
        className={styles['nav-button']}
        onClick={handleNextPage}
        text="Next"
        isDisabled={currentPage === totalPages || loading}
      />

      <Button
        type="button"
        className={styles['nav-button']}
        onClick={handleLastPage}
        text="Last"
        isDisabled={currentPage === totalPages || loading}
      />
    </div>
  );
};

export default Pagination;
