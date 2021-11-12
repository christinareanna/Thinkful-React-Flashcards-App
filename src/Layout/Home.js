import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api/index";

function Home() {
    const [decks, setDecks] = useState([]);

    function loadDecks() {
        listDecks().then(setDecks) // call listDecks function and access the values of the decks that are loaded
    }

    useEffect(() => {
        loadDecks(); // get all data of loadDecks
    }, []);


    const handleDelete = (deckId) => {
        const confirmDeletion = window.confirm(
            "Delete this deck? You will not be able to recover it."
        );
        if (confirmDeletion) { // call the deleteDeck, load all of the decks, deckId used to access a specific deck you want to delete
            deleteDeck(deckId).then(loadDecks);
        }
    };

    return (
        <div className="container">
            <Link to="/decks/new" className="btn btn-secondary mb-2">
                <span class="oi oi-plus" /> Create Deck
            </Link>
            <div class="cards-in-deck">
                {decks.map((deck) => {
                    return (
                        <div className="card" style={{ width: "18rem;" }} key={deck.id}>
                            <div class="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h3>{`${deck.name}`}</h3>
                                    </div>
                                    <div className="col">
                                        <p className="float-right">{`${deck.cards.length}`} cards</p>
                                    </div>
                                </div>
                                <p class="card-text">{`${deck.description}`}</p>
                            </div>
                            <div className="ml-3 pl-1">
                                <Link
                                    to={`/decks/${deck.id}`}
                                    className="btn btn-secondary mb-3"
                                >
                                    <span class="oi oi-eye" /> View
                                </Link>
                                <Link
                                    to={`/decks/${deck.id}/study`}
                                    className="btn btn-primary ml-3 mb-3"
                                >
                                    <span class="oi oi-book" /> Study
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-danger float-right mb-3 mr-3"
                                    onClick={() => handleDelete(deck.id)} /*delete the specific deck*/
                                >
                                    <span class="oi oi-trash" /> Delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
