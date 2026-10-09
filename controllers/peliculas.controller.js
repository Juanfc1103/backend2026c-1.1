import { peliculas } from "../database/db.js";

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
}

const peliculasController = new PeliculasController();
export default peliculasController;
