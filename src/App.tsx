import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import { store } from './redux/store';
import { ROUTES } from './constants';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Container from './components/Container/Container';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.AUTH} element={<Auth />} />
          </Routes>
          <Toaster />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
