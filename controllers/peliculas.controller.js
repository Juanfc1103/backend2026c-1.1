import { peliculas } from "../database/db.js";
import { v4 as uuidv4 } from "uuid";

class PeliculasController {
  mostrarPeliculas() {
    if (peliculas.length === 0) {
      return {
        status: 200,
        data: null,
        message: "No hay películas registradas",
      };
    }

    return {
      status: 200,
      data: peliculas,
      message: "Películas listadas exitosamente",
    };
  }

  crear(newPelicula) {
    if (
      !newPelicula ||
      !newPelicula.titulo ||
      !newPelicula.genero ||
      !newPelicula.duracion
    ) {
      return {
        status: 400,
        data: null,
        message: "Faltan datos indispensables de la película",
      };
    }

    newPelicula.id = uuidv4();

    peliculas.push(newPelicula);

    return {
      status: 201,
      data: newPelicula,
      message: "Película agregada exitosamente",
    };
  }
}

const peliculasController = new PeliculasController();
export default peliculasController;
