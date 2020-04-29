import styled from 'styled-components';

export const UserImage = styled.img`
  width: ${({ theme }) => theme.avatar.sm};
  height: ${({ theme }) => theme.avatar.sm};
  border-radius: 50%;
  display: block;
`;
