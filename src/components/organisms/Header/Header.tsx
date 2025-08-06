'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';

const HeaderContainer = styled.header`
  position: relative;
  background-color: ${theme.colors.backgroundGreen};
  padding: ${theme.spacing.xl} ${theme.spacing.lg};

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.xxl} ${theme.spacing.xxl};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  max-width: ${theme.layout.maxWidth};
`;

const Content = styled.div`
  max-width: ${theme.layout.maxWidth};
`;

const PageTitle = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSizes.xxxl};
  margin-bottom: ${theme.spacing.sm};
  text-align: left;
  margin-bottom: 25px;
`;

const Description = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSizes.md};
  text-align: left;
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
          <Content>
            {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
            {description && <Description>{description}</Description>}
          </Content>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
