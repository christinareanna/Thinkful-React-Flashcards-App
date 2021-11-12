import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { updateCard, readCard, readDeck } from "../utils/api/index";

export default function EditCard() {
    const { deckId, cardId } = useParams();
    const history = useHistory();
    const [card, setCard] = useState([]);
    const [deck, setDeck] = useState([]);


    function handleSubmit(card) { // go back to the specific deck when submit is clicked
        updateCard(card).then(history.push(`/decks/${deckId}`));
    }

    useEffect(() => {
        readDeck(deckId).then(setDeck); // getting deck info from readDeck, change with setDeck
        readCard(cardId).then(setCard); // getting card info from readCard, change with setCard
    }, [deckId, cardId]); 

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link to="/">
                            <span class="oi oi-home" />
                            Home
                        </Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        {deck.name}
                    </li>
                </ol>
            </nav>
            <h2>Edit Card {card.id}</h2> {/* shows which card you are editing*/}
            <form onSubmit={handleSubmit} 
            className="form-group">
                <label htmlFor="front">Front</label>
                <textarea 
                class="form-control" 
                id="edit-Card" 
                rows="3"
                value={card.front} /* front of card */
                />
                <div className="form-group">
                    <label>Back</label>
                    <textarea
                        id="front"
                        name="front"
                        className="form-control"
                        type="text"
                        value={card.back} /* back of card */
                    />
                </div>
                <Link to={`/decks/${deck.id}`} className="btn btn-secondary mx-1">
                    Cancel {/* clicking cancel lets you go back to the specific deck */}
                </Link>
                <button className="btn btn-primary mx-1" type="submit"> 
                    Submit
                </button>
            </form>
        </div>
    );
}
