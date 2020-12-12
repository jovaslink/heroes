import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { getHeroesByHeroes } from "../selectors/getHeroesByHero";
import { CardHero } from "../CardHero";
import { useLocation } from "react-router-dom";

export const SearchScreen = ({ history }) => {
  const queryString = require("query-string");
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [handlerInputForm, { heroeInput }] = useForm({
    heroeInput: q,
  });

  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    setHeroes(getHeroesByHeroes(q));
  }, [q]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${heroeInput}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1>Buscar Heroe</h1>
          <hr />
          <form className="form-inline" onSubmit={handlerSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                name="heroeInput"
                autoComplete="off"
                className="form-control"
                placeholder="Busca Heroe"
                value={heroeInput}
                onChange={handlerInputForm}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-8">
          <h1>Resultado</h1>
          <hr />
          {q === "" && (
            <div className="alert alert-info"> Buscar un Superheroe</div>
          )}

          {q !== "" && heroes.length === 0 && (
            <div className="alert alert-danger">
              {" "}
              No hay resultados con {q}{" "}
            </div>
          )}

          {heroes.map((heroe) => (
            <CardHero key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};
