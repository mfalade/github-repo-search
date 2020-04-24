import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './repositories';

export default configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
});
