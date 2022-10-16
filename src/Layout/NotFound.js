import React from "react";
import {Link} from "react-router-dom";
import NothingFound from "./intelligent-404-pages.jpeg"
function NotFound(deck) {
  return (
    <div className="NotFound">
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
      <h1 style={{textAlign: "center"}}>Not Found</h1>
      <img src={NothingFound} alt="Nothing exists here" style={{ maxWidth: "100%", height: "auto", alignItems: "center" }} />
    </div>
  );
}

export default NotFound;
