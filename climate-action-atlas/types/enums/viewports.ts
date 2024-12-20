export enum BREAK_POINT {
  DESKTOP = 1200,
  MOBILE = 600,
}

export const DEVICE_QUERY = (breakpoint: BREAK_POINT) => `(min-width: ${breakpoint}px)`;