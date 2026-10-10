import { tickets } from "../database/tickets.db.js";
import { v4 as uuidv4 } from "uuid";

class TicketsController {
  mostrarTickets() {
    if (tickets.length === 0) {
      return {
        status: 200,
        data: null,
        message: "No hay tickets registrados",
      };
    }
    return {
      status: 200,
      data: tickets,
      message: "Tickets listados exitosamente",
    };
  }

  crear(newTicket) {
    if (
      !newTicket ||
      !newTicket.funcionId ||
      !newTicket.asiento ||
      !newTicket.precio
    ) {
      return {
        status: 400,
        data: null,
        message: "Faltan datos indispensables del ticket",
      };
    }
    newTicket.id = uuidv4();
    tickets.push(newTicket);
    return {
      status: 201,
      data: newTicket,
      message: "Ticket agregado exitosamente",
    };
  }

  actualizar(newTicket, idTicket) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id === idTicket) {
        tickets[i].funcionId = newTicket.funcionId
          ? newTicket.funcionId
          : tickets[i].funcionId;
        tickets[i].asiento = newTicket.asiento
          ? newTicket.asiento
          : tickets[i].asiento;
        tickets[i].precio = newTicket.precio
          ? newTicket.precio
          : tickets[i].precio;

        return {
          status: 201,
          data: tickets[i],
          message: "Ticket actualizado exitosamente",
        };
      }
    }
    return {
      status: 400,
      data: null,
      message: "Ticket no encontrado",
    };
  }

  eliminar(idTicket) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id === idTicket) {
        tickets.splice(i, 1);
        return {
          status: 200,
          data: tickets,
          message: "Ticket eliminado exitosamente",
        };
      }
    }
    return {
      status: 400,
      data: null,
      message: "Ticket no encontrado",
    };
  }
}

const ticketsController = new TicketsController();
export default ticketsController;
