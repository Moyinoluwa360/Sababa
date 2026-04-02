import { PostHogProvider } from '@posthog/react';
import { ANALYTICS_ENABLED, POSTHOG_API_KEY, POSTHOG_OPTIONS } from './settings';

export function AnalyticsProvider({ children }) {
  if (!ANALYTICS_ENABLED) {
    return <>{children}</>;
  }

  return (
    <PostHogProvider apiKey={POSTHOG_API_KEY} options={POSTHOG_OPTIONS}>
      {children}
    </PostHogProvider>
  );
}
