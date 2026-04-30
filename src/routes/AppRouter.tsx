import { ChatBot, Spinner, Wrapper } from '@components';
import { Suspense } from 'react';
import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
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
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
