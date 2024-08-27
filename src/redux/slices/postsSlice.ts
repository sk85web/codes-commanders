import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import { IPost } from '../../types';
import { BASE_URL } from '../../constants';

interface PostsState {
  postsList: IPost[];
  loading: boolean;
  error: string | null;
  currentPage: number;
}

export const getPosts = createAsyncThunk<IPost[]>(
  'posts/getPosts',
  async () => {
    const response = await axios.get<IPost[]>(`${BASE_URL}/posts`);
    return response.data;
  },
);

const initialState: PostsState = {
  postsList: [],
  loading: false,
  error: null,
  currentPage: 1,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.postsList = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { setCurrentPage } = postsSlice.actions;

export default postsSlice.reducer;
