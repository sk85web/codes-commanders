import Pagination from '../components/Pagination/Pagination';
import PostsBox from '../components/PostsBox/PostsBox';

const Home = () => {
  return (
    <div>
      <PostsBox />
      <Pagination />
    </div>
  );
};

export default Home;
