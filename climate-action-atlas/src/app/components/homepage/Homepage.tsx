import React, { Children } from 'react';
import { HomepageLayout } from '../homepageLayout/HomepageLayout';
import { Header } from '../header/Header';
import { PageTitle } from '../../../../types/enums/page';
import { Description } from '../../../../types/enums/description';



const HomePage = () => (
  <HomepageLayout
    title='Homepage'
    canonical=""
    pageTitle={PageTitle.HowToGetInvolved}
    description={Description.ClimatActionTitle}
  >

  </HomepageLayout>
);

export default HomePage;