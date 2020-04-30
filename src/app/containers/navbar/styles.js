import styled from 'styled-components';

export const Header = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};

  a {
    text-decoration: none;
    outline: none;
    border: none;
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.color.purple1};
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.color.purple1};
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const RightCol = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;
