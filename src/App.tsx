import Constant from '@core/constants';
import useConfig from '@hooks/useConfig';
import useUser from '@hooks/useUser';
import AppRouter from '@routes/AppRouter';
import { useEffect } from 'react';

const App = () => {
  const { getData: getConfig } = useConfig();
  const { getData: getUser } = useUser();

  useEffect(() => {
    getConfig();
    getUser();
  }, [getConfig, getUser]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      document.body.style.backgroundImage = `url('${Constant.DEFAULT_BACKGROUND_IMAGE}')`;
    };
    img.src = Constant.DEFAULT_BACKGROUND_IMAGE;
  }, []);

  return <AppRouter />;
};

export default App;
