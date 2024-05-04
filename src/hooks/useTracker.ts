import { TrackingEvent, TrackingParams } from '@models/tracking';
import { analytics } from '@services/firebase';
import { logEvent } from 'firebase/analytics';
import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useTracker = (
  trackingParams: Partial<TrackingParams>,
  trackDisplayed?: boolean
) => {
  const location = useLocation();

  const trackEvent = useCallback(
    (event: TrackingEvent, otherParams?: Partial<TrackingParams>) => {
      logEvent(analytics, event, {
        ...trackingParams,
        ...otherParams,
        page_path: location.pathname,
      });
    },
    [trackingParams, location]
  );

  useEffect(() => {
    trackDisplayed && trackEvent('component_displayed');
  }, [trackDisplayed, location, trackEvent]);

  return {
    trackEvent,
  };
};

export default useTracker;
