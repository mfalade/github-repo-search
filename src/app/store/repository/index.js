import { createSlice } from '@reduxjs/toolkit';

import { getRepository, getReadme } from 'app/api/github';
import { SLICES } from 'app/store/constants';
import { repositoriesSelector } from 'app/store/repositories';
import { getErrorMessage, trimRepositoryFields } from 'app/store/helpers';

const initialRepositoryState = {
  isFetching: true,
  data: {},
  readme: '',
};

export const repositorySlice = createSlice({
  name: SLICES.REPOSITORY,
  initialState: initialRepositoryState,
  reducers: {
    initializeRequest: (state) => {
      state.data = {};
      state.isFetching = true;
      state.error = null;
      state.readme = '';
    },
    executeSuccessHandler: (state, { payload }) => {
      state.error = null;
      state.isFetching = false;
      state.data = payload;
    },
    setReadmeData: (state, { payload }) => {
      state.readme = payload;
    },
    executeFailureHandler: (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    },
  },
});

export const {
  initializeRequest,
  executeSuccessHandler,
  executeFailureHandler,
  setReadmeData,
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
    // set repository data once it's available
    dispatch(executeSuccessHandler(trimmed));

    // set readme data without blocking repository data
    const readme = await getReadme(repositoryName);
    dispatch(setReadmeData(readme));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    dispatch(executeFailureHandler(errorMessage));
  }
};

export const repositorySelector = (state) => state.repository;

export default repositorySlice.reducer;
