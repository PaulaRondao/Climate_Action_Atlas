'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ButtonContainer, SpanContainer } from './button.styles';

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
  eventTracking?: () => void;
}

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  asLink = '',
  externalLink = false,
  type = 'button',
  eventTracking = () => {},
  ...otherProps
}: ButtonProps): JSX.Element => {
  // const router = useRouter();

  return (
    <ButtonContainer
      onClick={(e) => {
        if (eventTracking) {
          eventTracking();
        }
        if (asLink) {
          if (externalLink) {
            window.open(asLink, '_blank');
          } else {
            router.push(asLink);
          }
        } else if (!disabled) {
          onClick(e);
        }
      }}
      type={type}
      {...otherProps}
    >
      <SpanContainer>{children}</SpanContainer>
    </ButtonContainer>
  );
};

export default Button;