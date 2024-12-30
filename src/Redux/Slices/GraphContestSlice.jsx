import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GraphContestSlice = createSlice({
  name: 'graph',
  initialState: {
    graphData: [],
  
  },
  reducers: {
    
    graphSuccess: (state, action) => {
      state.graphData = action.payload;
    },
   
  },
});

export const {  graphSuccess} = GraphContestSlice.actions;
export default GraphContestSlice.reducer;

