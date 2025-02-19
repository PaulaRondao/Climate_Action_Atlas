'use client';

import React from 'react';
import HomepageLayout from '../website-layout/homepage-layout/HomepageLayout';
import { PageTitle } from '../../../../types/enums/pageTitle';
import { Description } from '../../../../types/enums/description';
import { InitiativeOptions } from '../../../../types/enums/initiative';

const HomePage: React.FC = () => (
  <HomepageLayout
    title="Homepage"
    canonical=""
    pageTitle={PageTitle.MovementForChange}
    description={Description.ClimatActionTitle}
  ></HomepageLayout>
);

export default HomePage;
