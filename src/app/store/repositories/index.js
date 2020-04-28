import { createSlice } from '@reduxjs/toolkit';

import { getRepositories } from 'app/api/github';
import { SLICES } from 'app/store/constants';
import {
  getErrorMessage,
  trimRepositoriesFields,
  setPaginationData,
} from 'app/store/helpers';

const initialRepositoriesState = {
  userQuery: '',
  isFetchComplete: false,
  isFetching: false,
  items: [],
  currentPage: 1,
  totalItemsCount: 0,
  totalNumPages: 0,
  error: null,
  requestStart: 0,
  requestEnd: 0,
};

export const repositoriesSlice = createSlice({
  name: SLICES.REPOSITORIES,
  initialState: initialRepositoriesState,
  reducers: {
    initializeRequest: (state) => {
      state.requestStart = 0;
      state.requestEnd = 0;
      state.isFetchComplete = false;
      state.isFetching = true;
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
      state.isFetchComplete = true;
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
    setUserQuery: (state, { payload }) => {
      state.isFetchComplete = false;
      state.userQuery = payload;
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
