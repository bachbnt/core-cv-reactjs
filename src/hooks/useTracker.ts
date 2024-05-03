import { analytics } from '@services/firebase';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';

const useTracker = () => {
  useEffect(() => {
    logEvent(analytics, 'page_view');
  }, []);

  const trackAction = (action: string) => {
    logEvent(analytics, action);
  };

  return {
    trackAction,
  };
};

export default useTracker;
