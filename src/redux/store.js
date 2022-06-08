import { configureStore } from '@reduxjs/toolkit';
import directoryReducer from './directory/directorySlice'
import darkModeReducer from './nightmode/nightmodeSlice';

export const store = configureStore({
  reducer: {
    directory: directoryReducer,
    darkMode: darkModeReducer
  },
});
