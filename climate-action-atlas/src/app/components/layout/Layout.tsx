// import NavBar from 'components/nav-bar/NavBar';
import React, { useEffect } from 'react';
import AppHead from '../appHead/AppHead';
import { PageTitle } from '../../../../types/enums/page';
import NavbarApp from '../navbar/NavbarApp';
import Footer  from '../footer/Footer';
import Wrapper from '../wrapper/Wrapper';
// import { User } from 'types/NextAuth';

interface LayoutProps<T> {
  children: React.ReactNode,
  title: string,
  connected?: boolean,
  metaTag?: string,
  canonical?: string,
}

const Layout = ({
  children,
  title,
  connected,
  metaTag,
  canonical,
}: LayoutProps<string>): JSX.Element => {

  return (
    <>
      <AppHead title={title} metaTag={metaTag} canonical={canonical} />
        <header>
          <NavbarApp
          // connected={connected}
          // user={user}
          // empty={emptyNavBar}
          // steps={steps}
          // activeStep={activeStep}
          />
        </header>
        <main>
        <Wrapper>{children}</Wrapper>
        </main>
        <Footer />
    </>
  );
};

Layout.defaultProps = {
  connected: false,
  metaTag: '',
  fluid: false,
  user: null,
  header: null,
  footer: null,
  canonical: null,
};
export default Layout;
