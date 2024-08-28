import { useParams } from 'react-router-dom';

import Comments from '../components/Comments/Comments';

const DetailPost = () => {
  const { id } = useParams();
  return <Comments id={id!} />;
};

export default DetailPost;
