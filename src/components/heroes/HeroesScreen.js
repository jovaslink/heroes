import React, { useMemo } from "react";
import { getHeroesById } from "../selectors/getHeroesById";
import { useParams, Redirect } from "react-router-dom";

export const HeroesScreen = ({ history }) => {
  //const heroe = getHeroesById(props.match.params.heroeId); por props

  const { heroeId } = useParams(); //por Hooks

  const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);

  if (!heroe) {
    return <Redirect to="/" />;
  }
  const handlerReturn = () => {
    history.goBack();
  };

  const { id, superhero, alter_ego, first_appearance, characters } = heroe;

  return (
    <div className="card mb-3 " style={{ maxWidth: 1540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`../assets/heroes/${id}.jpg`}
            className="card-img animate__animated animate__backInLeft"
            alt={id}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <b>Nombre: </b>
              {superhero}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <b>Alter Ego: </b>
              {alter_ego}
            </h6>

            <p className="card-text">
              <b>Primera aparición: </b>
              {first_appearance}
            </p>
            {characters !== alter_ego && (
              <p className="card-text">
                <small className="text-muted">
                  <b>También llamado: </b>
                  {characters}
                </small>
              </p>
            )}
            <button className="btn btn-outline-info" onClick={handlerReturn}>
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
