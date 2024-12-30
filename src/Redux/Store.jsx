import { configureStore } from "@reduxjs/toolkit";

import ContestReducer from './Slices/ContestSlice'
import GraphReducer from './Slices/GraphContestSlice'

export const store = configureStore({
    reducer: {
        contest: ContestReducer,
        graph: GraphReducer
    },
});