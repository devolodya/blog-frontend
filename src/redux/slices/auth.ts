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
  data: null,
  status: "loading",
};

const authSlice: any = createSlice({
  name: "auth",
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

export const authReducer = authSlice.reducer;
