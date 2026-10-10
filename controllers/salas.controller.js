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

  actualizar(newSala, idSala) {
    for (let i = 0; i < salas.length; i++) {
      if (salas[i].id === idSala) {
        salas[i].nombre = newSala.nombre ? newSala.nombre : salas[i].nombre;
        salas[i].capacidad = newSala.capacidad
          ? newSala.capacidad
          : salas[i].capacidad;

        return {
          status: 201,
          data: salas[i],
          message: "Sala actualizada exitosamente",
        };
      }
    }
    return {
      status: 400,
      data: null,
      message: "Sala no encontrada",
    };
  }

  eliminar(idSala) {
    for (let i = 0; i < salas.length; i++) {
      if (salas[i].id === idSala) {
        salas.splice(i, 1);
        return {
          status: 200,
          data: salas,
          message: "Sala eliminada exitosamente",
        };
      }
    }
    return {
      status: 400,
      data: null,
      message: "Sala no encontrada",
    };
  }
}

const salasController = new SalasController();
export default salasController;
