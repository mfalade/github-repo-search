import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.purple1};
  padding: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.xxs};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
`;

export const TextInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  opacity: 0.5;
  transition: opacity 300ms ease-in;
  font-size: ${({ theme }) => theme.font.size.lg};
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.color.white};

  &:focus {
    opacity: 1;
  }
  ::placeholder {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const SubmitButton = styled.button`
  width: 200px;
  cursor: pointer;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.color.purple2};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.sm};
  padding: ${({ theme }) => theme.spacing.xs};
  transition: background 300ms ease-in-out;
  border-radius: ${({ theme }) => theme.spacing.xxs};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  font-family: ${({ theme }) => theme.font.family};

  &:focus,
  &:hover {
    background: ${({ theme }) => theme.color.purple1};
  }
  &:active {
    background: ${({ theme }) => theme.color.purple2};
  }
`;
