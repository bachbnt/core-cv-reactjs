import { useEffect } from 'react';
import AppRouter from 'src/routes/appRouter';
import { useConfig } from './hooks/useConfig';
import { useUser } from './hooks/useUser';

const App = () => {
  const { getData: getConfig } = useConfig();
  const { getData: getUser } = useUser();

  useEffect(() => {
    (async () => {
      await Promise.all([getConfig, getUser]);
    })();
  }, [getConfig, getUser]);

  return <AppRouter />;
};

export default App;
