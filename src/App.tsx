import { useConfig } from '@hooks/useConfig';
import { useUser } from '@hooks/useUser';
import AppRouter from '@routes/appRouter';
import { useEffect } from 'react';

const App = () => {
  const { getData: getConfig } = useConfig();
  const { getData: getUser } = useUser();

  useEffect(() => {
    getConfig();
    getUser();
  }, [getConfig, getUser]);

  return <AppRouter />;
};

export default App;
