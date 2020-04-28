import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import repositoryReducer from './repository';
import repositoriesReducer from './repositories';

export default configureStore({
  reducer: {
    auth: authReducer,
    repository: repositoryReducer,
    repositories: repositoriesReducer,
  },
});
