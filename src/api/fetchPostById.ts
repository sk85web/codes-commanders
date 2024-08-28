import axios from 'axios';
import { BASE_URL } from '../constants';

export const fetchPostById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch post');
  }
};
