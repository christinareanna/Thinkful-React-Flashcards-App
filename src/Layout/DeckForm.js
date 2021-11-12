import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DeckForm({ handleSubmit, deck, setDeck }) { // call handleSubmit, deck, setDeck as props to use in DeckForm
    const initializeDeck = {
        name: "",
        description: "",
    }; 
    const [newDeck, setNewDeck] = useState({ ...initializeDeck }); // use spread property on initializeDeck to set every newDeck to start with empty strings for name and description

    const onSubmit = (event) => { 
        event.preventDefault(); // prevents reload
        if (!deck) { // if it's the new deck, get state of new deck
            handleSubmit(newDeck); // get current state of newDeck
        } else {
            handleSubmit(deck); // get current state of deck
        }

        setNewDeck({ ...initializeDeck });
    };

    function handleChange(event) { // onChange handler to track values of input
        if (!deck) {
            setNewDeck({ ...newDeck, [event.target.id]: event.target.value }); // change value when new deck is created
        } else {
            setDeck({ ...deck, [event.target.id]: event.target.value });
        }
    }

    return (
        <div>
            {/* create new deck form */}
            {!deck && (
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Deck Name"
                            value={newDeck.name}
                            onChange={handleChange} // handle input by setting equal to handleChange
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            class="form-control"
                            id="description"
                            placeholder="Brief description of the deck"
                            value={newDeck.description}
                            onChange={handleChange} // handle input by setting equal to handleChange
                            required
                        />
                    </div>
                    <div className="create-deck-btns">
                        <Link to="/">
                            <button className="btn btn-secondary">Cancel</button>
                        </Link>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            )}

            {/* form to be able to edit */}
            {deck && (
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Deck Name"
                            value={deck.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            class="form-control"
                            id="description"
                            placeholder="Brief description of the deck"
                            value={deck.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Link to="/">
                            <button className="btn btn-secondary mr-2 mt-3 ">Cancel</button>
                        </Link>
                        <button type="submit" className="btn btn-primary mr-2 mt-3">
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
