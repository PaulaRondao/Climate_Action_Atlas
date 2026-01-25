import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { usePathname } from 'next/navigation';
import SVGIMG from '../../../../public/logo/logo-full-climate-green.svg';

const LinkWrapper = styled.div`
  padding-left: 8px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding-left: 0;
  }
`;

interface LogoProps {
  connected: boolean;
}

const Logo = ({ connected }: LogoProps) => {
  const pathname = usePathname();

  return (
    <LinkWrapper>
      <Link
        href={connected ? '/dashboard' : '/'}
        passHref
        aria-current={pathname === '/' ? 'page' : undefined}
      >
        <Image src={SVGIMG} alt="Retour à la page d'accueil" width={186} height={41} />
      </Link>
    </LinkWrapper>
  );
};

export default Logo;
