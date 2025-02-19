export enum BREAK_POINT {
  DESKTOP = 900,
  MOBILE = 600,
}

export const DEVICE_QUERY = (breakpoint: BREAK_POINT) =>
  `(min-width: ${breakpoint}px)`;
