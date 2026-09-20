/**
 * Single source of truth for canonical URLs and business details.
 *
 * The apex domain 308-redirects to www, so www is the canonical host —
 * canonical tags and sitemap entries must agree with that or the two hosts
 * compete for the same rankings.
 */
export const SITE_URL = "https://www.activatedcarbonagents.com";

export const SITE_NAME = "Activated Carbon Agents";

export const BUSINESS = {
  name: SITE_NAME,
  phone: "+1-855-934-3376",
  phoneDisplay: "(855) 934-3376",
  email: "kim@activatedcarbonagents.com",
  street: "17512 Griffin Lane",
  city: "Huntington Beach",
  region: "CA",
  postalCode: "92647",
  country: "US",
  founder: "Kimberly Walsh",
  foundingYear: "1988",
} as const;

export function canonical(path = "/") {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
