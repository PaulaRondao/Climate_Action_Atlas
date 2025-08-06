/**
 * Routes frontend de l'application
 */
export const ROUTES = {
  HOME: '/',
  INITIATIVES: {
    LIST: '/initiatives',
    CREATE: '/initiatives/create',
    DETAILS: (id: number) => `/initiatives/${id}`,
    EDIT: (id: number) => `/initiatives/${id}/edit`,
  },
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },
  PROFILE: {
    DASHBOARD: '/profile',
    SETTINGS: '/profile/settings',
  },
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

/**
 * Routes API de l'application
 */
export const API_ROUTES = {
  INITIATIVES: {
    BASE: '/api/initiatives',
    BY_ID: (id: number) => `/api/initiatives/${id}`,
  },
  USERS: {
    BASE: '/api/users',
    BY_ID: (id: number) => `/api/users/${id}`,
    LOGIN: '/api/users/login',
    REGISTER: '/api/users/register',
  },
  COMPANIES: {
    BASE: '/api/companies',
    BY_ID: (id: number) => `/api/companies/${id}`,
  },
} as const;

/**
 * Routes complètes (frontend + API)
 */
export const ALL_ROUTES = {
  FRONTEND: ROUTES,
  API: API_ROUTES,
} as const;
