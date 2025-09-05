'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  CardActionArea,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import type { Initiative } from '@prisma/client';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const TagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  marginTop: theme.spacing(2),
}));

interface InitiativeCardProps {
  initiative: Initiative;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ initiative }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/initiatives/${initiative.id}`);
  };

  return (
    <StyledCard>
      <CardActionArea onClick={handleClick} sx={{ height: '100%' }}>
        <StyledCardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {initiative.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {initiative.description}
          </Typography>
          <TagsContainer>
            <Chip
              label={initiative.initiativeType}
              color="primary"
              size="small"
              variant="outlined"
            />
            <Chip
              label={initiative.description}
              color="secondary"
              size="small"
              variant="outlined"
            />
          </TagsContainer>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default InitiativeCard;
