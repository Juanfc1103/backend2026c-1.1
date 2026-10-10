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
}

const funcionesController = new FuncionesController();
export default funcionesController;
