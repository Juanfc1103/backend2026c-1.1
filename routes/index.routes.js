import express from "express";
import peliculasController from "../controllers/peliculas.controller.js";
import salasController from "../controllers/salas.controller.js";
import funcionesController from "../controllers/funciones.controller.js";
import ticketsController from "../controllers/tickets.controller.js";
import reservacionesController from "../controllers/reservaciones.controller.js";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Sistema de Cine" });
});

router.get("/vistas/peliculas", (req, res) => {
  const response = peliculasController.mostrarPeliculas();
  res.render("peliculas", { title: "Películas", peliculas: response.data || [] });
});

router.get("/vistas/salas", (req, res) => {
  const response = salasController.mostrarSalas();
  res.render("salas", { title: "Salas", salas: response.data || [] });
});

router.get("/vistas/funciones", (req, res) => {
  const response = funcionesController.mostrarFunciones();
  res.render("funciones", { title: "Funciones", funciones: response.data || [] });
});

router.get("/vistas/tickets", (req, res) => {
  const response = ticketsController.mostrarTickets();
  res.render("tickets", { title: "Tickets", tickets: response.data || [] });
});

router.get("/vistas/reservaciones", (req, res) => {
  const response = reservacionesController.mostrarReservaciones();
  res.render("reservaciones", { title: "Reservaciones", reservaciones: response.data || [] });
});

export default router;
