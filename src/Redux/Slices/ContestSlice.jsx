import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const contestSlice = createSlice({
  name: 'contest',
  initialState: {
    allContests: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.allContests = action.payload;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearContests: (state) => {
      state.allContests = [];
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure, clearContests } = contestSlice.actions;
export default contestSlice.reducer;

