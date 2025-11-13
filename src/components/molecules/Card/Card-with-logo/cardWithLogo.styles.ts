import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface CardContainerProps {
  $backgroundColorGreen?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  padding: ${theme.spacing.sm};
  background-color: ${({ $backgroundColorGreen }) =>
    $backgroundColorGreen ? '#072A32' : 'var(--color-background-beige)'};
  margin: ${theme.spacing.md} auto;
  gap: ${theme.spacing.xxl};
`;

export const LogoContainer = styled.div`
  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 1rem;

  p {
    font-size: ${theme.typography.fontSizes.lg};
    font-weight: bold;
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  padding-bottom: 40px;
  text-align: center;
`;

export const Card = styled.div`
  width: 300px;
  gap: ${theme.spacing.md};
  border: 1px solid #072a32;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.small};

  p {
    text-align: left;
  }
`;
