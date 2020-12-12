import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { NavBar } from "../components/ui/NavBar";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />

          <Route exact path="/heroe/:heroeId" component={HeroesScreen} />

          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="marvel" />
        </Switch>{" "}
      </div>
    </>
  );
};
