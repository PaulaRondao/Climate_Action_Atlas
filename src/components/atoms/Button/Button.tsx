'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface StyledButtonProps {
  $fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  margin-top: ${theme.spacing.lg};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  color: ${theme.colors.white};
  background-color: ${theme.colors.backgroundGreen};
  border: 2px solid ${theme.colors.backgroundGreen};
  border-radius: ${theme.borderRadius.large};
  transition: ${theme.transitions.default};
  text-transform: uppercase;
  font-size: ${theme.typography.fontSizes.md};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  font-weight: bold;
  max-width: 330px;

  &:hover {
    color: ${theme.colors.green};
    background-color: transparent;
    -webkit-text-stroke: 0.5px ${theme.colors.green};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  span {
    display: flex;
    gap: ${theme.spacing.sm};
    justify-content: center;
    align-items: center;
    letter-spacing: ${theme.typography.letterSpacing.default};
  }
`;

export type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  asLink?: string;
  externalLink?: boolean;
  type?: ButtonType;
  title?: string;
  value?: string;
  fullWidth?: boolean;
  eventTracking?: () => void;
}

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  asLink = '',
  externalLink = false,
  type,
  fullWidth = false,
  eventTracking = () => {},
  ...otherProps
}: ButtonProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (eventTracking) {
      eventTracking();
    }
    if (asLink) {
      if (externalLink) {
        window.open(asLink, '_blank');
      } else {
        window.location.href = asLink;
      }
    } else if (!disabled) {
      onClick(e);
    }
  };

  return (
    <StyledButton
      onClick={handleClick}
      type={type}
      disabled={disabled}
      $fullWidth={fullWidth}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
