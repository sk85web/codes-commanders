import axios from 'axios';

import { BASE_URL } from '../constants';

const fetchUser = async (username: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/users?username=${username}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users');
  }
};

export default fetchUser;
