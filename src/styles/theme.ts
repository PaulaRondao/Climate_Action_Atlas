export const theme = {
  colors: {
    darkBlue: 'var(--foreground-dark-blue)',
    greyBlack: 'var(--foreground-grey-black)',
    white: 'var(--foreground-white)',
    backgroundBeige: 'var(--color-background-beige)',
    backgroundGreen: 'var(--color-background-green)',
    backgroundKingBlue: 'var(--color-background-king-blue)',
  },
  typography: {
    fontSizes: {
      xs: 'var(--text-xs)', // 0.6875rem
      sm: 'var(--text-sm)', // 0.8125rem
      smd: 'var(--text-smd)', // 0.875rem
      md: 'var(--text-md)', // 1rem
      lg: 'var(--text-lg)', // 1.125rem
      xl: 'var(--text-xl)', // 1.25rem
      xxl: 'var(--text-xxl)', // 1.625rem
      xxxl: 'var(--text-xxxl)', // 2.375rem
      xxxxl: 'var(--text-xxxxl)', // 3.375rem
      xxxxxl: 'var(--text-xxxxxl)', // 5.625rem
    },
    fontFamilies: {
      heading: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
      body: 'Tahoma, Geneva, Verdana, sans-serif',
    },
    lineHeights: {
      normal: '1',
      heading: '2.1rem',
      body: '1.5rem',
    },
    letterSpacing: {
      heading: '1.5px',
      default: '0.125rem',
    },
  },
  layout: {
    maxWidth: 'var(--max-width)', // 1100px
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '64px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
};
