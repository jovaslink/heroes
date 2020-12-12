import "../../data/heroes";
import { heroes } from "../../data/heroes";

export const getHeroesById = (id) => {
  return heroes.find((heroe) => id === heroe.id);
};
