import { ApiReference } from '@scalar/nextjs-api-reference';
const config = {
  spec: {
    url: '/api-documentation',
  },
  theme: 'purple',
};
export const GET = ApiReference(config);
