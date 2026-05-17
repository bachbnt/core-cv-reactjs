/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { useConfigQuery, useUserQuery } from '@queries';
import AppRouter from '@routes/AppRouter';

const App = () => {
  useConfigQuery();
  useUserQuery();
  return <AppRouter />;
};

export default App;
