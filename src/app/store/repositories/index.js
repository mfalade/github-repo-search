import { createSlice } from '@reduxjs/toolkit';

import { getRepositories } from 'app/api/github';
import { SLICES } from 'app/config';

import {
  getErrorMessage,
  trimRepositoryFields,
  setPaginationData,
} from './helpers';

const repositoriesInitialState = {
  isFetching: false,
  items: [],
  currentPage: 1,
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
      state.currentPage = payload.currentPage;
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

export const fetchRepositories = (repositoryName, page = 1) => async (
  dispatch,
) => {
  try {
    dispatch(iniializeRequest());
    const requestPayload = { repositoryName, page };
    const apiResponse = await getRepositories(requestPayload);
    const trimmed = trimRepositoryFields(apiResponse);
    const paginated = setPaginationData(trimmed, page);
    dispatch(executeSuccessHandler(paginated));
  } catch (apiError) {
    const errorMessage = getErrorMessage(apiError);
    dispatch(executeFailureHandler(errorMessage));
  }
};

export const repositoriesSelector = (state) => state.repositories;

export default repositoriesSlice.reducer;
