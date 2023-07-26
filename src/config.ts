// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Cannabis Museum NZ";
export const SITE_DESCRIPTION =
  "Whakamana Cannabis Museum o Aotearoa";
export const TWITTER_HANDLE = "@CannabisMuseum";
export const MY_NAME = "";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;

export const SITE_BANNER_URL = "/2023/banner.jpeg";