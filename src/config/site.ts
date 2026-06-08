export type SiteVariant = 'live' | 'coming_soon';

function parseSiteVariant(value: unknown): SiteVariant | null {
  if (value === 'live' || value === 'coming_soon') return value;
  return null;
}

export const SITE_VARIANT: SiteVariant =
  parseSiteVariant(import.meta.env.VITE_SITE_VARIANT) ??
  (import.meta.env.PROD ? 'coming_soon' : 'live');

export const IS_COMING_SOON = SITE_VARIANT === 'coming_soon';
