import { TrackingEvent, TrackingParams } from '@models/tracking';
import { analytics } from '@services/firebase';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useTracker = (
  trackingParams: Partial<TrackingParams> = {},
  trackDisplayed: boolean = true
) => {
  const location = useLocation();

  const trackEvent = (
    event: TrackingEvent,
    otherParams?: Partial<TrackingParams>
  ) => {
    console.log(
      JSON.stringify({
        ...trackingParams,
        ...otherParams,
        page_path: location.pathname,
      })
    );
    logEvent(analytics, event, {
      ...trackingParams,
      ...otherParams,
      page_path: location.pathname,
    });
  };
  useEffect(() => {
    if (trackDisplayed) {
      trackEvent('component_displayed');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackDisplayed]);

  return {
    trackEvent,
  };
};

export default useTracker;
