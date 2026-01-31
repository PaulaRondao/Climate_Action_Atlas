import { Wrapper } from '@/components/shared';
import SwaggerClient from '@/components/templates/ApiDocumentation/SwaggerClient';

export const dynamic = 'force-dynamic';

export default function APIConnexion() {
  return (
    <div>
      <Wrapper>
        <h1>API Documentation</h1>
      </Wrapper>
      <SwaggerClient url="/swagger.yaml" />
    </div>
  );
}
