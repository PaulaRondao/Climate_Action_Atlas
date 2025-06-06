'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';

const HeaderContainer = styled.header`
  position: relative;
  background-color: ${theme.colors.darkBlue};
  padding: ${theme.spacing.xl} ${theme.spacing.lg};

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  text-align: center;
`;

const PageTitle = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSizes.xl};
  margin-bottom: ${theme.spacing.sm};
`;

const Description = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSizes.md};
`;

interface HeaderProps {
  pageTitle?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle, description }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        {(pageTitle || description) && (
          <div>
            {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
            {description && <Description>{description}</Description>}
          </div>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
