import dotenv from 'dotenv';

dotenv.config();

export default {
  baseUrl: process.env.BETTER_AUTH_URL,
  resendApiKey: process.env.RESEND_API_KEY,
};
