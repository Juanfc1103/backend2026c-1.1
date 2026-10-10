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
}

const ticketsController = new TicketsController();
export default ticketsController;
