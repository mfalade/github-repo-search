import { createSlice } from '@reduxjs/toolkit';

import { getRepository } from 'app/api/github';
import { SLICES } from 'app/store/constants';
import { repositoriesSelector } from 'app/store/repositories';
import { getErrorMessage, trimRepositoryFields } from 'app/store/helpers';

const initialRepositoryState = {
  isFetching: false,
  data: {},
};

export const repositorySlice = createSlice({
  name: SLICES.REPOSITORY,
  initialState: initialRepositoryState,
  reducers: {
    initializeRequest: (state) => {
      state.data = {};
      state.isFetching = true;
      state.error = null;
    },
    executeSuccessHandler: (state, { payload }) => {
      state.error = null;
      state.isFetching = false;
      state.data = payload;
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

export const repositorySelector = (state) => state.repository;

export default repositorySlice.reducer;
