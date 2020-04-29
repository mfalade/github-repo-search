export const mockRepository = {
  id: 'repo-id-1',
  language: 'javascript',
  name: 'user/repo',
  full_name: 'user/repo',
  description: 'My test repo',
  owner: {
    login: 'user-1',
    full_name: 'John Doe',
  },
};

export const mockRepositoryWithLongDesc = {
  id: 'repo-id-1',
  language: 'javascript',
  name: 'user/repo',
  full_name: 'user/repo',
  description: 'My test repo'.repeat(50),
  owner: {
    login: 'user-1',
    full_name: 'John Doe',
  },
};
