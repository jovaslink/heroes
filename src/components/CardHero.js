import React from "react";
import { Link } from "react-router-dom";

export const CardHero = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div
      className="card animate__animated animate__pulse"
      style={{ maxWidth: 288 }}
    >
      <img
        src={`./assets/heroes/${id}.jpg`}
        className="card-img-top"
        alt={id}
      />
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{alter_ego}</h6>

        <p className="card-text">{first_appearance}</p>

        {characters !== alter_ego && (
          <p className="card-text">
            <small className="text-muted">{characters}</small>
          </p>
        )}

        <Link to={`./heroe/${id}`} className="card-link">
          Ver mas
        </Link>
      </div>
    </div>
  );
};
