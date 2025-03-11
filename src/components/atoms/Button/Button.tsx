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
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  color: var(--foreground-dark-blue);
  background-color: transparent;
  border: 2px solid var(--foreground-dark-blue);
  border-radius: ${theme.borderRadius.large};
  transition: ${theme.transitions.default};
  text-transform: uppercase;
  font-size: var(--text-md);
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  &:hover {
    border-color: var(--color-background-green);
    color: var(--color-background-green);
    -webkit-text-stroke: 0.5px var(--color-background-green);
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
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  eventTracking?: () => void;
}

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  asLink = '',
  externalLink = false,
  type = 'button',
  variant = 'primary',
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

  const { fullWidth: _, ...restProps } = otherProps;

  return (
    <StyledButton
      onClick={handleClick}
      type={type}
      disabled={disabled}
      variant={variant}
      $fullWidth={fullWidth}
      {...restProps}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
