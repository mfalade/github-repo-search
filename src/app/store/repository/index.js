import { createSlice } from '@reduxjs/toolkit';

import { SLICES } from 'app/store/constants';
import { getRepository, getReadme } from 'app/api/github';
import { repositoriesSelector } from 'app/store/repositories';
import { getErrorMessage, trimRepositoryFields } from 'app/store/helpers';

const initialRepositoryState = {
  isFetching: false,
  data: {},
  error: null,
  readme: {
    isFetching: false,
    data: '',
    error: null,
  },
};

export const repositorySlice = createSlice({
  name: SLICES.REPOSITORY,
  initialState: initialRepositoryState,
  reducers: {
    initializeRequest: (state) => {
      state.data = {};
      state.readme = {};
      state.error = null;
      state.isFetching = true;
    },
    executeSuccessHandler: (state, { payload }) => {
      state.error = null;
      state.data = payload;
      state.isFetching = false;
    },
    executeFailureHandler: (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    },
    setReadmeData: (state, { payload }) => {
      state.readme.data = payload;
      state.readme.isFetching = false;
    },
    setReadmeError: (state, { payload }) => {
      state.readme.error = payload;
      state.readme.isFetching = false;
    },
    initializeReadmeFetch: (state) => {
      state.readme.data = '';
      state.readme.error = null;
      state.readme.isFetching = true;
    },
  },
});

export const {
  initializeRequest,
  executeSuccessHandler,
  executeFailureHandler,
  setReadmeData,
  setReadmeError,
  initializeReadmeFetch,
} = repositorySlice.actions;

export const fetchRepositoryDetails = (repositoryName) => async (
  dispatch,
  getState,
) => {
  dispatch(initializeRequest());
  try {
    let repository;
    const repositories = repositoriesSelector(getState());
    const match = repositories.items.find(
      (r) => r.full_name.toLowerCase() === repositoryName.toLowerCase(),
    );
    if (match) {
      repository = match;
    } else {
      repository = await getRepository(repositoryName);
    }

    const trimmed = trimRepositoryFields(repository);
    dispatch(executeSuccessHandler(trimmed));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    dispatch(executeFailureHandler(errorMessage));
  }
};

export const fetchReadme = (repositoryName) => async (dispatch) => {
  dispatch(initializeReadmeFetch());
  try {
    const readme = await getReadme(repositoryName);
    dispatch(setReadmeData(readme));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    dispatch(setReadmeError(errorMessage));
  }
};

export const repositorySelector = (state) => state.repository;
export const readmeSelector = (state) => state.repository.readme;

export default repositorySlice.reducer;
