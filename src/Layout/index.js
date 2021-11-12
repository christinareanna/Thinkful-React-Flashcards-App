import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"
import Study from "./Study.js"
import CreateDeck from "./CreateDeck"
import Deck from "./Deck"
import EditDeck from "./EditDeck"
import AddCard from "./AddCard"
import EditCard from "./EditCard"



function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/decks">
            <Redirect to="/" />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study/>
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard/>
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck/>
          </Route>
            <NotFound />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
