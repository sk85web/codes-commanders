import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import { store } from './redux/store';
import { ROUTES } from './constants';
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.AUTH} element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
