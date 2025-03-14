export const CONFIG = {
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 50,
  },
  UPLOAD: {
    MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
    IMAGE_DIMENSIONS: {
      THUMBNAIL: { width: 100, height: 100 },
      PREVIEW: { width: 300, height: 200 },
      FULL: { width: 800, height: 600 },
    },
  },
  DATE_FORMAT: {
    DISPLAY: 'DD/MM/YYYY',
    INPUT: 'YYYY-MM-DD',
    DATETIME: 'DD/MM/YYYY HH:mm',
  },
  CACHE: {
    TTL: 60 * 60 * 1000, // 1 hour
  },
} as const;
