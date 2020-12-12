import React, { useMemo } from "react";
import { getHeroesByPubliseher } from "../selectors/getHeroesByPublisher";
import { CardHero } from "../CardHero";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPubliseher(publisher), [publisher]);

  return (
    <div className="card-columns animate__animated animate__zoomIn">
      {heroes.map((heroe) => {
        return <CardHero key={heroe.id} {...heroe} />;
      })}
    </div>
  );
};
