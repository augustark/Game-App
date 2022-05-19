import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { gamesApi } from '../features/gameApi/gameApi';
import { gameNewsApi } from '../features/gameApi/gameNewsApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    [gameNewsApi.reducerPath]: gameNewsApi.reducer
  },
});