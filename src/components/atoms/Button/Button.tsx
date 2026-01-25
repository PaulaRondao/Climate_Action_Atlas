'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface StyledButtonProps {
  $fullWidth?: boolean;
  $backgroundColor?: string;
  $backgroundColorHover?: string;
  $color?: string;
  $colorHover?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  margin: 24px auto 0 auto;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  color: ${({ $color }) => ($color ? $color : `${theme.colors.white}`)};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : `${theme.colors.backgroundGreen}`};
  border: 2px solid ${theme.colors.backgroundGreen};
  border-radius: ${theme.borderRadius.large};
  transition: ${theme.transitions.default};
  text-transform: uppercase;
  font-size: ${theme.typography.fontSizes.md};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  font-weight: bold;
  max-width: 330px;

  &:hover {
    color: ${({ $colorHover }) => ($colorHover ? $colorHover : `${theme.colors.green}`)};
    background-color: ${({ $backgroundColorHover }) =>
      $backgroundColorHover ? $backgroundColorHover : 'transparent'};
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
  ariaLabel?: string;
  type?: ButtonType;
  title?: string;
  value?: string;
  fullWidth?: boolean;
  backgroundColor?: string;
  color?: string;
  backgroundColorHover?: string;
  colorHover?: string;
}

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  ariaLabel = undefined,
  type,
  fullWidth = false,
  backgroundColor = undefined,
  color = undefined,
  backgroundColorHover = undefined,
  colorHover = undefined,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      $fullWidth={fullWidth}
      $backgroundColor={backgroundColor}
      $color={color}
      $backgroundColorHover={backgroundColorHover}
      $colorHover={colorHover}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
