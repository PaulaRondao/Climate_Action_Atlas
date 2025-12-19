'use client';

import { Wrapper } from '@/components/shared';
import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerPage = () => {
  return (
    <div>
      <Wrapper>
        <h1>API Documentation</h1>
      </Wrapper>
      <SwaggerUI url="swagger.yaml" />
    </div>
  );
};

export default SwaggerPage;
