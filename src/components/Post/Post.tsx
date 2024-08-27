import React from 'react';

import { IPost } from '../../types';
import styles from './Post.module.css';

const Post: React.FC<IPost> = ({ title, body }) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__inner}>
        <h2 className={styles.post__title}>{title}</h2>
        <p className={styles.post__body}>{body}</p>
      </div>
    </div>
  );
};

export default Post;
