'use client';

import React from 'react';
import HomepageLayout from '../website-layout/homepage-layout/HomepageLayout';
import { PageTitle } from '../../../../types/enums/pageTitle';
import { Description } from '../../../../types/enums/description';



const HomePage : React.FC = () => (
  <HomepageLayout
    title='Homepage'
    canonical=""
    pageTitle={PageTitle.HowToGetInvolved}
    description={Description.ClimatActionTitle}
  >
    <h1>Appplication</h1>
  </HomepageLayout>
);

export default HomePage;