import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetchPosts: any = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const { data }: any = await axios.get("/posts");
    return data;
  }
);

const initialState: any = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice: any = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state: any) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
    [fetchPosts.fulfilled]: (state: any, action: any) => {
      state.posts.items = action.payload.reverse();
      state.posts.status = "loaded";
    },
    [fetchPosts.rejected]: (state: any) => {
      state.posts.items = [];
      state.posts.status = "loaded";
    },
  },
});

export const postsReducer = postsSlice.reducer;
