import { salas } from "../database/salas.db.js";
import { v4 as uuidv4 } from "uuid";

class SalasController {
  mostrarSalas() {
    if (salas.length === 0) {
      return {
        status: 200,
        data: null,
        message: "No hay salas registradas",
      };
    }
    return {
      status: 200,
      data: salas,
      message: "Salas listadas exitosamente",
    };
  }

  crear(newSala) {
    if (!newSala || !newSala.nombre || !newSala.capacidad) {
      return {
        status: 400,
        data: null,
        message: "Faltan datos indispensables de la sala",
      };
    }
    newSala.id = uuidv4();
    salas.push(newSala);
    return {
      status: 201,
      data: newSala,
      message: "Sala agregada exitosamente",
    };
  }
}

const salasController = new SalasController();
export default salasController;
