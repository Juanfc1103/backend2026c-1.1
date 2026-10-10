import { funciones } from "../database/funciones.db.js";
import { v4 as uuidv4 } from "uuid";

class FuncionesController {
  mostrarFunciones() {
    if (funciones.length === 0) {
      return {
        status: 200,
        data: null,
        message: "No hay funciones registradas",
      };
    }
    return {
      status: 200,
      data: funciones,
      message: "Funciones listadas exitosamente",
    };
  }

  crear(newFuncion) {
    if (
      !newFuncion ||
      !newFuncion.peliculaId ||
      !newFuncion.salaId ||
      !newFuncion.horario
    ) {
      return {
        status: 400,
        data: null,
        message: "Faltan datos indispensables de la función",
      };
    }
    newFuncion.id = uuidv4();
    funciones.push(newFuncion);
    return {
      status: 201,
      data: newFuncion,
      message: "Función agregada exitosamente",
    };
  }

  actualizar(newFuncion, idFuncion) {
    for (let i = 0; i < funciones.length; i++) {
      if (funciones[i].id === idFuncion) {
        funciones[i].peliculaId = newFuncion.peliculaId
          ? newFuncion.peliculaId
          : funciones[i].peliculaId;
        funciones[i].salaId = newFuncion.salaId
          ? newFuncion.salaId
          : funciones[i].salaId;
        funciones[i].horario = newFuncion.horario
          ? newFuncion.horario
          : funciones[i].horario;

        return {
          status: 201,
          data: funciones[i],
          message: "Función actualizada exitosamente",
        };
      }
    }
    return {
      status: 400,
      data: null,
      message: "Función no encontrada",
    };
  }

  eliminar(idFuncion) {
    for (let i = 0; i < funciones.length; i++) {
      if (funciones[i].id === idFuncion) {
        funciones.splice(i, 1);
        return {
          status: 200,
          data: funciones,
          message: "Función eliminada exitosamente",
        };
      }
    }
    return {
      status: 400,
      data: null,
      message: "Función no encontrada",
    };
  }
}

const funcionesController = new FuncionesController();
export default funcionesController;
