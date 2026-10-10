import { reservaciones } from "../database/reservaciones.db.js";
import { v4 as uuidv4 } from "uuid";

class ReservacionesController {
  mostrarReservaciones() {
    if (reservaciones.length === 0) {
      return {
        status: 200,
        data: null,
        message: "No hay reservaciones registradas",
      };
    }
    return {
      status: 200,
      data: reservaciones,
      message: "Reservaciones listadas exitosamente",
    };
  }

  crear(newReservacion) {
    if (
      !newReservacion ||
      !newReservacion.cliente ||
      !newReservacion.ticketId ||
      !newReservacion.fecha
    ) {
      return {
        status: 400,
        data: null,
        message: "Faltan datos indispensables de la reservación",
      };
    }
    newReservacion.id = uuidv4();
    reservaciones.push(newReservacion);
    return {
      status: 201,
      data: newReservacion,
      message: "Reservación agregada exitosamente",
    };
  }

  actualizar(newReservacion, idReservacion) {
    for (let i = 0; i < reservaciones.length; i++) {
      if (reservaciones[i].id === idReservacion) {
        reservaciones[i].cliente = newReservacion.cliente
          ? newReservacion.cliente
          : reservaciones[i].cliente;
        reservaciones[i].ticketId = newReservacion.ticketId
          ? newReservacion.ticketId
          : reservaciones[i].ticketId;
        reservaciones[i].fecha = newReservacion.fecha
          ? newReservacion.fecha
          : reservaciones[i].fecha;

        return {
          status: 201,
          data: reservaciones[i],
          message: "Reservación actualizada exitosamente",
        };
      }
    }
    return {
      status: 400,
      data: null,
      message: "Reservación no encontrada",
    };
  }

  eliminar(idReservacion) {
    for (let i = 0; i < reservaciones.length; i++) {
      if (reservaciones[i].id === idReservacion) {
        reservaciones.splice(i, 1);
        return {
          status: 200,
          data: reservaciones,
          message: "Reservación eliminada exitosamente",
        };
      }
    }
    return {
      status: 400,
      data: null,
      message: "Reservación no encontrada",
    };
  }
}

const reservacionesController = new ReservacionesController();
export default reservacionesController;
