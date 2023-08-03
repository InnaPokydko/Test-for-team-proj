import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './profileSlice';
import { themeReducer } from './theme/themeSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    theme: themeReducer,
  },
});

export default store;