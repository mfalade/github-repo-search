export const getAuthToken = () => {
  return localStorage.getItem('GITHUB_AUTH_TOKEN');
};

export const setAuthToken = (token) => {
  return localStorage.getItem('GITHUB_AUTH_TOKEN', token);
};
