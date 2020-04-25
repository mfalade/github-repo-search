import { createSlice } from '@reduxjs/toolkit';

import { fetchRepositoriesByName } from 'app/api/github';
import { SLICES } from 'app/config';

import { trimRepositoryFields, setPaginationData } from './helpers';

const repositoriesInitialState = {
  isFetching: false,
  items: [],
  totalItemsCount: 0,
  totalNumPages: 0,
  error: null,
};

export const repositoriesSlice = createSlice({
  name: SLICES.REPOSITORIES,
  initialState: repositoriesInitialState,
  reducers: {
    iniializeRequest: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    executeSuccessHandler: (state, { payload }) => {
      state.error = null;
      state.isFetching = false;
      state.items = payload.items;
      state.totalItemsCount = payload.totalItemsCount;
      state.totalNumPages = payload.totalNumPages;
    },
    executeFailureHandler: (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    },
  },
});

export const {
  iniializeRequest,
  executeSuccessHandler,
  executeFailureHandler,
} = repositoriesSlice.actions;

export const fetchRepositories = (repositoryName, page) => async (dispatch) => {
  try {
    dispatch(iniializeRequest());
    const requestPayload = { repositoryName, page };
    const repositories = await fetchRepositoriesByName(requestPayload);
    const trimmed = trimRepositoryFields(repositories);
    const paginated = setPaginationData(trimmed);
    dispatch(executeSuccessHandler(paginated));
  } catch (requestError) {
    dispatch(executeFailureHandler(requestError));
  }
};

export const repositoriesSelector = (state) => state.repositories;

export default repositoriesSlice.reducer;
