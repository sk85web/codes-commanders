import axios from 'axios';

import { BASE_URL } from '../constants';
import { IComment } from '../types';

export const fetchComments = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/comments`);
    const allComments: IComment[] = response.data;
    return allComments.filter(comments => comments.postId === id);
  } catch (error) {
    console.error('Failed to fetch comments');
  }
};
