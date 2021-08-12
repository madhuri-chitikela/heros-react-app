import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./Header";
import HomePage from "./HomePage";
import MarvelCharactersPage from "./MarvelCharactersPage";
import MarvelDCPage from "./MarvelDCPage";
import PowerMatrixPage from "./PowerMatrixPage";
import CharactersPage from "./CharactersPage";
import CharactersToComicsPage from "./CharactersToComicsPage";
import CharactersStatsPage from "./CharactersStatsPage";
import ComicsPage from "./ComicsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route path="/marvel">
              <MarvelCharactersPage />
            </Route>
            <Route path="/marvel-dc">
              <MarvelDCPage />
            </Route>
            <Route path="/power-matrix">
              <PowerMatrixPage />
            </Route>
            <Route path="/characters">
              <CharactersPage />
            </Route>
            <Route path="/characters-to-comics">
              <CharactersToComicsPage />
            </Route>
            <Route path="/characters-stats">
              <CharactersStatsPage />
            </Route>
            <Route path="/comics">
              <ComicsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >

  );
}

export default App;
