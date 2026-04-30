import Constant from '@core/constants';
import useConfig from '@hooks/useConfig';
import useUser from '@hooks/useUser';
import { RootState, useAppSelector } from '@redux/store';
import AppRouter from '@routes/AppRouter';
import { useEffect } from 'react';

const App = () => {
  const { getData: getConfig } = useConfig();
  const { getData: getUser } = useUser();
  const cachedUser = useAppSelector(
    (state: RootState) => state.userReducer.user,
  );
  const cachedConfig = useAppSelector(
    (state: RootState) => state.configReducer.config,
  );

  useEffect(() => {
    // If Redux-persist already has data, refresh silently in background (no spinner).
    // Otherwise show spinner and block until data is ready.
    getConfig(!!cachedConfig);
    getUser(!!cachedUser);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
