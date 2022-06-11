import { Provider } from 'react-redux';
import Spinner from 'src/components/spinner/spinner';
import { store } from 'src/redux/store';
import MainRouter from 'src/routes/mainRouter';

const App = () => {
  return (
    <Provider store={store}>
      <MainRouter />
      <Spinner />
    </Provider>
  );
};

export default App;
