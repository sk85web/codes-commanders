import React, { SyntheticEvent, useState } from 'react';

import styles from './SignInForm.module.css';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import fetchUser from '../../api/fetchUser';
import toast from 'react-hot-toast';
import BackBtn from '../BackBtn/BackBtn';

const SignInForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = await fetchUser(value);
    if (data.length) {
      const user = data[0];
      navigate(ROUTES.HOME);
      dispatch(setCurrentUser(user));
      toast.success('Succesfully entered');
    } else toast.error('User not found');
    setValue('');
  };

  return (
    <>
      <BackBtn />
      <div className={styles.container}>
        <h1>Sign in</h1>

        <form action="/" onSubmit={onFormSubmit} className={styles.form}>
          <InputForm
            type="text"
            placeholder="Enter your name"
            value={value}
            onChange={onInputChange}
          />
          <Button type="submit" text="Send" isDisabled={!value.trim()} />
        </form>
      </div>
    </>
  );
};

export default SignInForm;
