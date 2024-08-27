import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import styles from './Header.module.css';
import { ROUTES } from '../../constants';
import { AppDispatch, RootState } from '../../redux/store';
import { setCurrentUser } from '../../redux/slices/userSlice';
import toast from 'react-hot-toast';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: RootState) => state.user);

  const handleSignIn = () => {
    navigate(ROUTES.AUTH);
  };

  const handleLogOut = () => {
    dispatch(setCurrentUser({ username: null }));
    navigate(ROUTES.HOME);
    toast.success('You log out succesfully');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Best Application</div>
      {currentUser?.username ? (
        <div className={styles['hello-block']}>
          <h3 className={styles.title}>Hello, {currentUser.username}</h3>
          <Button type="button" onClick={handleLogOut} text="Log Out" />
        </div>
      ) : (
        <Button type="button" onClick={handleSignIn} text="Sign In" />
      )}
    </header>
  );
};

export default Header;
