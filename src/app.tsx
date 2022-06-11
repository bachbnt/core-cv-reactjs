import { useCallback, useEffect } from 'react';
import AppRouter from 'src/routes/appRouter';
import { useConfig } from './hooks/useConfig';
import { useUser } from './hooks/useUser';

const App = () => {
  const { getData: getConfig } = useConfig();
  const { getData: getUser } = useUser();

  const onInit = useCallback(async () => {
    await getConfig();
    await getUser();
  }, [getConfig, getUser]);

  useEffect(() => {
    window.addEventListener('load', onInit);
    return window.removeEventListener('load', onInit);
  }, [onInit]);

  return <AppRouter />;
};

export default App;
