'use client';

import React, { useEffect, useState } from 'react';
import {
  BurgerContainer,
  Container,
  Content,
  NavBarContainer,
  NavBarList,
  Wrapper,
} from './navbar.styles';
import {
  StyledButton,
  StyledLink,
} from '@/components/atoms/Button/button.styles';
import { usePathname } from 'next/navigation';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import { useSession } from 'next-auth/react';
import LoginButton from '@/components/atoms/Button/loginButton';
import { Session } from 'next-auth';

interface NavigationProps {
  session: Session | null;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1219);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const CommonLinks = ({ pathname }: { pathname: string }) => (
  <>
    <StyledLink
      href="/liste"
      aria-current={pathname === '/liste' ? 'page' : undefined}
    >
      Liste
    </StyledLink>
    <StyledLink
      href="/carte"
      aria-current={pathname === '/carte' ? 'page' : undefined}
    >
      Explorer la carte
    </StyledLink>
    <StyledButton
      href="/inscription"
      aria-current={pathname === '/inscription' ? 'page' : undefined}
    >
      S&apos;enregistrer
    </StyledButton>
    <LoginButton></LoginButton>
  </>
);

const AuthLinks = ({ pathname }: { pathname: string }) => (
  <>
    <StyledLink
      href="/liste"
      aria-current={pathname === '/liste' ? 'page' : undefined}
    >
      Liste
    </StyledLink>
    <StyledLink
      href="/carte"
      aria-current={pathname === '/carte' ? 'page' : undefined}
    >
      Explorer la carte
    </StyledLink>
    <StyledLink
      href="/formulaire-initiative"
      aria-current={pathname === '/formulaire-initiative' ? 'page' : undefined}
    >
      Ajouter une initiative
    </StyledLink>
    <LoginButton></LoginButton>
  </>
);

const Navigation = ({ session }: NavigationProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const isConnected = !!session;

  return (
    <Wrapper $connected={isConnected}>
      <NavBarContainer role="navigation" aria-label="Menu principal">
        <Logo connected={isConnected} />

        {!isMobile && (
          <NavBarList>
            {isConnected ? (
              <AuthLinks pathname={pathname} />
            ) : (
              <CommonLinks pathname={pathname} />
            )}
          </NavBarList>
        )}

        {isMobile && (
          <BurgerContainer>
            <BurgerMenu
              isBurgerMenuOpen={isOpen}
              burgerMenuCollapse={setIsOpen}
            />
          </BurgerContainer>
        )}
      </NavBarContainer>

      {isMobile && (
        <Container
          $isOpen={isOpen}
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <Content>
            {isConnected ? (
              <AuthLinks pathname={pathname} />
            ) : (
              <CommonLinks pathname={pathname} />
            )}
          </Content>
        </Container>
      )}
    </Wrapper>
  );
};

export default Navigation;
