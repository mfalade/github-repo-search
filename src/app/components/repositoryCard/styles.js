import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getBackgroundColor } from './helpers';

export const RepositoryCardContainer = styled.article`
  border-radius: ${({ theme }) => theme.spacing.xxs};
  background: ${(props) => getBackgroundColor(props.language)};
  padding: ${({ theme }) => theme.spacing.sm};
  word-break: break-word;
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  transition: box-shadow 150ms ease-in;
  line-height: 1.2;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.md};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const AvatarContainer = styled.div`
  min-width: 40px;
`;

export const RepoLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.purple2};
  font-weight: bold;
  transition: color 150ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.purple1};
  }
`;

export const ProgrammingLanguage = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.purple2};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.color.purple2};
  border-radius: ${({ theme }) => theme.spacing.xxs};
  margin: ${({ theme }) => theme.spacing.xs} 0;
  padding: ${({ theme }) => theme.spacing.xxxs}
    ${({ theme }) => theme.spacing.xs};
`;

export const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;
