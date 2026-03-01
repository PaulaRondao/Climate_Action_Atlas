import { ApiReference } from '@scalar/nextjs-api-reference';
const config = {
  spec: {
    url: 'http://localhost:3000/api-documentation',
  },
  theme: 'purple',
};
export const GET = ApiReference(config);
