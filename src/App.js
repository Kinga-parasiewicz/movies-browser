import { useEffect } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./core/Navigation";
import MoviesPage from "./features/MoviesPage";
import MoviePage from "./features/MoviePage";
import PeoplePage from "./features/PeoplePage";
import ProfilePage from "./features/ProfilePage";
import { Error } from "./common/Error";
import {
  toError,
  toMovie,
  toMovies,
  toPeople,
  toProfile,
} from "./core/routes";
import { fetchCommon } from "./common/commonSlice";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommon());
  }, [dispatch]);

  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toMovies()}>
          <MoviesPage />
        </Route>
        <Route path={toProfile()}>
          <ProfilePage />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
        </Route>
        <Route path={toError()}>
          <Error />
        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};
