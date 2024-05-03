import { analytics } from '@services/firebase';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useTracker = ({
  trackPageLoaded = true,
}: { trackPageLoaded?: boolean } = {}) => {
  const location = useLocation();

  useEffect(() => {
    trackPageLoaded &&
      logEvent(analytics, 'page_view', { path: location.pathname });
  }, [trackPageLoaded, location]);

  const trackEvent = (event: string, params?: any) => {
    logEvent(analytics, event, params);
  };

  return {
    trackEvent,
  };
};

export default useTracker;
