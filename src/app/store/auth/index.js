import { createSlice } from '@reduxjs/toolkit';

import { SLICES } from 'app/store/constants';
import { authenticateUserByCode } from 'app/api/github';
import { refreshGithubClientToken } from 'app/api/github/client';
import { setAuthToken, getAuthToken } from 'app/lib/auth';

const initialAuthState = {
  isFetching: false,
  error: null,
  user: {
    token: getAuthToken(),
    data: {},
  },
};

export const authSlice = createSlice({
  name: SLICES.AUTH,
  initialState: initialAuthState,
  reducers: {
    initializeRequest: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    executeSuccessHandler: (state, { payload }) => {
      state.error = null;
      state.isFetching = false;
      state.user.token = payload;
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
} = authSlice.actions;

export const authenticateUser = (authenticationCode) => async (dispatch) => {
  dispatch(initializeRequest());
  try {
    const response = await authenticateUserByCode(authenticationCode);
    const { error, error_description } = response;
    const errorMessage = error_description || error;
    console.log(response, 'response ...');
    if (errorMessage) {
      return dispatch(executeFailureHandler(errorMessage));
    }

    const authToken = 'dummyToken';
    setAuthToken(setAuthToken);
    refreshGithubClientToken(authToken);
    dispatch(executeSuccessHandler(authToken));
  } catch (error) {
    dispatch(executeFailureHandler(error));
  }
};

export const authSelector = (state) => state.auth;

export default authSlice.reducer;
