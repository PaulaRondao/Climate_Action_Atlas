import React, { ReactNode } from 'react';
import { PageTitle} from '../../../../types/enums/page';
import Layout from '../layout/Layout';
import { Header } from '../header/Header';
import { Description } from '../../../../types/enums/description';


interface HomepageLayoutProps {
  title: string,
  children?: ReactNode,
  canonical?: string,
  pageTitle?: PageTitle,
  description?: Description,
}
export const HomepageLayout = ({
  title,
  children,
  canonical,
  pageTitle,
  description,
}: HomepageLayoutProps) => (
    <Layout
      title={title}
      fluid
      canonical={canonical}
    >
      
    <Header 
      pageTitle={pageTitle}
      description={description}
    />
      {children}
    </Layout>
);

HomepageLayout.defaultProps = {
  title: null,
  canonical: null,
  pageTitle: null,
  description: null,
};