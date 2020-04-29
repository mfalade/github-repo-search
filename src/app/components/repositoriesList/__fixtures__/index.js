export const NUM_MOCK_REPOSITORIES = 20;
export const mockRepositories = Array.from(
  { length: NUM_MOCK_REPOSITORIES },
  (_, index) => index + 1,
).map((item) => ({
  id: `repo-id-${item}`,
  name: 'user/repo',
  full_name: 'user/repo',
  description: 'My test repo',
  language: 'javascript',
  owner: {
    login: `user-${item}`,
    full_name: 'John Doe',
  },
}));
