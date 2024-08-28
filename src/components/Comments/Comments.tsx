import { useEffect, useState } from 'react';
import { fetchComments } from '../../api/fetchComments';
import { IComment, IPost } from '../../types';
import { fetchPostById } from '../../api/fetchPostById';

import styles from './Comments.module.css';
import BackBtn from '../BackBtn/BackBtn';

interface CommentsProps {
  id: string;
}

const Comments = ({ id }: CommentsProps) => {
  const [comments, setComments] = useState<IComment[] | null>(null);
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const getCommentsData = async () => {
      try {
        if (id) {
          const commentsData = await fetchComments(+id);
          setComments(commentsData || []);
        }
      } catch (error) {
        console.error('Error in comments fetching');
        setComments([]);
      }
    };

    const getPostData = async () => {
      try {
        if (id) {
          const postData = await fetchPostById(+id);
          setPost(postData);
        }
      } catch (error) {
        console.error('Error in post fetching');
        setPost(null);
      }
    };

    getCommentsData();
    getPostData();
  }, [id]);

  if (comments === null) {
    return <div className={styles.loading}>Loading comments...</div>;
  }

  return (
    <div className={styles.detailPostContainer}>
      <BackBtn />

      <div className={styles.postContent}>
        <h2 className={styles.postTitle}>{post?.title}</h2>
        <p className={styles.postBody}>{post?.body}</p>
      </div>
      <div className={styles.commentsSection}>
        <h3 className={styles.commentsTitle}>Comments</h3>
        <ul className={styles.commentsList}>
          {comments.map(comment => (
            <li key={comment.id} className={styles.commentItem}>
              <h4 className={styles.commentAuthor}>{comment.name}</h4>
              <p className={styles.commentBody}>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
