export const POSTHOG_API_KEY = import.meta.env.POSTHOG_PROJECT_TOKEN;
export const POSTHOG_HOST = import.meta.env.POSTHOG_HOST;

// Set VITE_ENABLE_ANALYTICS=false in .env to disable analytics without code changes.
export const ANALYTICS_ENABLED =
  import.meta.env.VITE_ENABLE_ANALYTICS !== 'false' &&
  Boolean(POSTHOG_API_KEY) &&
  Boolean(POSTHOG_HOST);

export const POSTHOG_OPTIONS = {
  api_host: POSTHOG_HOST,
  defaults: '2026-01-30',
};
