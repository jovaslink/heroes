import { heroes } from "../../data/heroes";

export const getHeroesByHeroes = (heroeInput) => {
  if (heroeInput === "") {
    return [];
  }
  heroeInput = heroeInput.toLocaleLowerCase();

  return heroes.filter((heroe) =>
    heroe.superhero.toLocaleLowerCase().includes(heroeInput)
  );
};
