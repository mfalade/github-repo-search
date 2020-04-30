export const getAccessToken = () => {
  return localStorage.getItem('GITHUB_ACCESS_TOKEN');
};

export const setAccessToken = (token) => {
  return localStorage.setItem('GITHUB_ACCESS_TOKEN', token);
};

export const getUserData = () => {
  const userData = localStorage.getItem('USER_DATA');
  if (userData) {
    return JSON.parse(userData);
  }
  return {};
};

export const setUserData = (data) => {
  const stringified = JSON.stringify(data);
  return localStorage.setItem('USER_DATA', stringified);
};
