import { createSlice } from '@reduxjs/toolkit';

import { SLICES } from 'app/store/constants';
import { getRepositories } from 'app/api/github';
import {
  getErrorMessage,
  setPaginationData,
  trimRepositoriesFields,
} from 'app/store/helpers';

const initialRepositoriesState = {
  items: [],
  error: null,
  userQuery: '',
  requestEnd: 0,
  requestStart: 0,
  totalNumPages: 0,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  isFetchComplete: false,
};

export const repositoriesSlice = createSlice({
  name: SLICES.REPOSITORIES,
  initialState: initialRepositoriesState,
  reducers: {
    initializeRequest: (state) => {
      state.isFetchComplete = false;
      state.isFetching = true;
      state.requestStart = 0;
      state.requestEnd = 0;
      state.error = null;
    },
    setRequestStartTime: (state) => {
      state.requestStart = new Date().getTime();
    },
    setRequestEndTime: (state) => {
      state.requestEnd = new Date().getTime();
    },
    executeSuccessHandler: (state, { payload }) => {
      state.error = null;
      state.isFetching = false;
      state.isFetchComplete = true;
      state.items = payload.items;
      state.currentPage = payload.currentPage;
      state.totalNumPages = payload.totalNumPages;
      state.totalItemsCount = payload.totalItemsCount;
    },
    executeFailureHandler: (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    },
    setUserQuery: (state, { payload }) => {
      state.userQuery = payload;
      state.isFetchComplete = false;
    },
  },
});

export const {
  initializeRequest,
  executeSuccessHandler,
  executeFailureHandler,
  setRequestStartTime,
  setRequestEndTime,
  setUserQuery,
} = repositoriesSlice.actions;

export const fetchRepositories = (repositoryName, page = 1) => async (
  dispatch,
) => {
  try {
    dispatch(initializeRequest());
    dispatch(setRequestStartTime());

    const requestPayload = { repositoryName, page };
    const apiResponse = await getRepositories(requestPayload);
    dispatch(setRequestEndTime());

    const { items, ...others } = apiResponse;
    const trimmed = { ...others, items: trimRepositoriesFields(items) };
    const paginated = setPaginationData(trimmed, page);

    dispatch(executeSuccessHandler(paginated));
  } catch (apiError) {
    const errorMessage = getErrorMessage(apiError);
    dispatch(executeFailureHandler(errorMessage));
  }
};

export const repositoriesSelector = (state) => state.repositories;

export default repositoriesSlice.reducer;
