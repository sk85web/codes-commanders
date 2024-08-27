import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './PostsBox.module.css';
import { AppDispatch, RootState } from '../../redux/store';
import Post from '../Post/Post';
import { useEffect } from 'react';
import { getPosts } from '../../redux/slices/postsSlice';
import { POSTS_ON_PAGE } from '../../constants';

const PostsBox = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { postsList, loading, error, currentPage } = useSelector(
    (state: RootState) => state.posts,
  );

  const startIndex = (currentPage - 1) * POSTS_ON_PAGE;
  const currentPosts = postsList.slice(startIndex, startIndex + POSTS_ON_PAGE);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentPage, dispatch]);

  if (loading)
    return <div className={styles['status-massage']}>Loading...</div>;
  if (error)
    return <div className={styles['status-massage']}>Error {error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Posts</h1>
      <ul className={styles['posts-box']}>
        {currentPosts.map(post => (
          <li key={post.id} className="post-item">
            <Link to={`/books/${post.id}`} style={{ textDecoration: 'none' }}>
              <Post title={post.title} body={post.body} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsBox;
