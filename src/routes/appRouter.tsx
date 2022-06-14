import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { Spinner, Wrapper } from 'src/components';
import { routes } from './routes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<Wrapper page={route.component} />}
          />
        ))}
      </Routes>
      <Spinner />
    </BrowserRouter>
  );
};

export default AppRouter;
