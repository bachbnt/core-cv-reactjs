/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { ChatBot, Spinner, Wrapper } from '@components';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(
  routes.map((route) => ({
    path: route.path,
    element: <Wrapper key={route.path} page={route.component} />,
  })),
);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Spinner />
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    </>
  );
};

export default AppRouter;
