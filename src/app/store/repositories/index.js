import { createSlice } from '@reduxjs/toolkit';

import { fetchRepositoriesByName } from 'api/github';
import { SLICES } from 'config';
import { trimRepositoryFields } from './helpers';

const repositoriesInitialState = {
  isFetching: false,
  items: [],
  totalItemsCount: 0,
  error: null,
};

export const repositoriesSlice = createSlice({
  name: SLICES.REPOSITORIES,
  initialState: repositoriesInitialState,
  reducers: {
    iniializeRequest: (state) => {
      state.isFetching = true;
      state.items = [];
    },
    executeSuccessHandler: (state, { payload }) => {
      state.error = null;
      state.isFetching = false;
      state.items = payload.items;
      state.totalItemsCount = payload.totalItemsCount;
    },
    executeFailureHandler: (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    },
  },
});

export const {
  iniializeRequest,
  executeSuccessHandler,
  executeFailureHandler,
} = repositoriesSlice.actions;

export const fetchRepositories = (repositoryName) => async (dispatch) => {
  try {
    dispatch(iniializeRequest());
    const repositories = await fetchRepositoriesByName(repositoryName);
    const result = trimRepositoryFields(repositories);
    dispatch(executeSuccessHandler(result));
  } catch (requestError) {
    dispatch(executeFailureHandler(requestError));
  }
};

export const repositoriesSelector = (state) => state.repositories;

export default repositoriesSlice.reducer;
