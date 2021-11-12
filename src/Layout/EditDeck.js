import React, { useEffect, useState } from "react";
import DeckForm from "./DeckForm";
import { useParams, Link, useHistory } from "react-router-dom";
import { updateDeck, readDeck } from "../utils/api/index";


export default function EditDeck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState([])
  const history = useHistory();


  function handleSubmit(deck) { // go to the specified deck based off of result.id, access data from updateDeck
    updateDeck(deck).then((result) => history.push(`/decks/${result.id}`))
  }


  useEffect(() => {
    readDeck(deckId).then(setDeck); // access data from readDeck function to get values of decks, change them with setDeck
  }, [deckId]);


  
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <span class="oi oi-home"></span> Home</Link> {/*use span to access icons from bootstrap */}
          </li>
          <li class="breadcrumb-item">
            <Link href={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {deck.id && ( 
      <DeckForm handleSubmit={handleSubmit} deck={deck} setDeck={setDeck} />
    )} {/* handleSubmit tells the deckForm what to do, also used for editing Deck*/}
    </div>
  );
}
