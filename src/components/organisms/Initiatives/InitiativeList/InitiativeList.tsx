'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import InitiativeCard from '../InitiativeCard/InitiativeCard';
import type { Initiative } from '@prisma/client';

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

interface InitiativeListProps {
  initiatives: Initiative[];
}

const InitiativeList: React.FC<InitiativeListProps> = ({ initiatives }) => {
  return (
    <StyledGrid container spacing={3}>
      {initiatives.map((initiative) => (
        <Grid item xs={12} sm={6} md={4} key={initiative.initiativeId}>
          <InitiativeCard initiative={initiative} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default InitiativeList;
