import React from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index";
import DeckForm from "./DeckForm";

export default function CreateDeck() {
  const history = useHistory();


    function handleSubmit(newDeck) { // get data from createDeck to create a new deck, push to go to the specific deck
    createDeck(newDeck).then((output) => history.push(`/decks/${output.id}`));
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <span class="oi oi-home" /> Home
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <DeckForm handleSubmit={handleSubmit}/>
    </div>
  );
}
