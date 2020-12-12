import "../../data/heroes";
import { heroes } from "../../data/heroes";

export const getHeroesByPubliseher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error("EL PUBLISHER ES INCORRECTO");
  }

  return heroes.filter((heroe) => publisher === heroe.publisher);
};
