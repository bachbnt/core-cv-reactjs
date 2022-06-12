import { useEffect } from 'react';
import { useConfig } from './hooks/useConfig';
import { useUser } from './hooks/useUser';
import AppRouter from 'src/routes/appRouter';

const App = () => {
  const { getData: getConfig } = useConfig();
  const { getData: getUser } = useUser();

  useEffect(() => {
    (async () => {
      await getConfig();
      await getUser();
    })();
  }, [getConfig, getUser]);

  return <AppRouter />;
};

export default App;
