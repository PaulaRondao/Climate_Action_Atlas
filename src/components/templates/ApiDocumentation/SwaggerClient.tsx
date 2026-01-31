'use client';

import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

interface SwaggerClientProps {
  url: string;
}

const SwaggerClient: React.FC<SwaggerClientProps> = ({ url }) => {
  return <SwaggerUI url={url} />;
};

export default SwaggerClient;
