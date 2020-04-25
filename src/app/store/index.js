import { configureStore } from '@reduxjs/toolkit';
import repositoryReducer from './repository';
import repositoriesReducer from './repositories';

export default configureStore({
  reducer: {
    repository: repositoryReducer,
    repositories: repositoriesReducer,
  },
});
