import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import { store } from './redux/store';
import { ROUTES } from './constants';
import Home from './pages/Home';
import Auth from './pages/Auth';
import DetailPost from './pages/DetailPost';
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
            <Route
              path={`${ROUTES.DETAIL_POST}/:id`}
              element={<DetailPost />}
            />
          </Routes>
          <Toaster />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
