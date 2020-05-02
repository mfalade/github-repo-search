import { createSlice } from '@reduxjs/toolkit';

import { SLICES } from 'app/store/constants';
import { fetchUserData } from 'app/api/github';
import { getErrorMessage, getResponseError } from 'app/store/helpers';
import {
  setAccessToken,
  getAccessToken,
  setUserData,
  getUserData,
} from 'app/lib/auth';

const initialAuthState = {
  isFetching: false,
  error: null,
  user: {
    accessToken: getAccessToken(),
    data: getUserData(),
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
      state.user.accessToken = payload.accessToken;
      state.user.data = payload.userData;
    },
    executeFailureHandler: (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    },
    clearUserData: (state) => {
      state.user.accessToken = null;
      state.user.data = {};
    },
  },
});

export const {
  initializeRequest,
  executeSuccessHandler,
  executeFailureHandler,
  clearUserData,
} = authSlice.actions;

export const fetchUser = (accessToken) => async (dispatch) => {
  setAccessToken(accessToken);
  dispatch(initializeRequest());
  try {
    const response = await fetchUserData(accessToken);
    const errorMessage = getResponseError(response);

    if (errorMessage) {
      // Github's api sometimes sends a 200 when errors occur.
      // Checking for errors before assuming success status
      return dispatch(executeFailureHandler(errorMessage));
    }

    setUserData(response);
    dispatch(executeSuccessHandler({ accessToken, userData: response }));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    dispatch(executeFailureHandler(errorMessage));
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.clear();
  dispatch(clearUserData());
};

export const authSelector = (state) => state.auth;

export default authSlice.reducer;
