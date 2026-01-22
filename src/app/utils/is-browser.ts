// src/app/shared/utils/is-browser.ts
export const isBrowser = (): boolean =>
  typeof window !== 'undefined' && typeof IntersectionObserver !== 'undefined';
