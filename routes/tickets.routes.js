import express from "express";
import ticketsController from "../controllers/tickets.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  const response = ticketsController.mostrarTickets();
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.get("/:id", (req, res) => {
  const response = ticketsController.buscarPorId(req.params.id);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.post("/create", (req, res) => {
  const response = ticketsController.crear(req.body);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.put("/update/:id", (req, res) => {
  const response = ticketsController.actualizar(req.body, req.params.id);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.delete("/delete/:id", (req, res) => {
  const response = ticketsController.eliminar(req.params.id);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

export default router;
