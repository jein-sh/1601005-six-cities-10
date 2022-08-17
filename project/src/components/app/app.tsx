import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import RoomPage from '../../pages/room-page/room-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {

  const {isDataLoaded} = useAppSelector((state) => state);

  if (isDataLoaded) {
    return (
      <LoadingPage />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage offers={[]}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage offers={[]} reviews={[]} />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
