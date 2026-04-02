import { useMemo } from 'react';
import { usePostHog } from '@posthog/react';
import posthog from 'posthog-js';
import { ANALYTICS_ENABLED } from './settings';

export function trackEvent(eventName, properties = {}) {
  if (!ANALYTICS_ENABLED) {
    return;
  }

  posthog.capture(eventName, properties);
}

export function identifyUser(userId, properties = {}) {
  if (!ANALYTICS_ENABLED || !userId) {
    return;
  }

  posthog.identify(userId, properties);
}

export function resetAnalytics() {
  if (!ANALYTICS_ENABLED) {
    return;
  }

  posthog.reset();
}

export function useAnalytics() {
  const posthogClient = usePostHog();

  return useMemo(
    () => ({
      enabled: ANALYTICS_ENABLED,
      track: (eventName, properties = {}) => {
        if (!ANALYTICS_ENABLED || !posthogClient) {
          return;
        }

        posthogClient.capture(eventName, properties);
      },
      identify: (userId, properties = {}) => {
        if (!ANALYTICS_ENABLED || !posthogClient || !userId) {
          return;
        }

        posthogClient.identify(userId, properties);
      },
      reset: () => {
        if (!ANALYTICS_ENABLED || !posthogClient) {
          return;
        }

        posthogClient.reset();
      },
    }),
    [posthogClient]
  );
}
