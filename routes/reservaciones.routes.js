import express from "express";
import reservacionesController from "../controllers/reservaciones.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  const response = reservacionesController.mostrarReservaciones();
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.get("/busqueda/fecha", (req, res) => {
  const { inicio, fin } = req.query;
  const response = reservacionesController.porRangoDeFecha(inicio, fin);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.get("/:id", (req, res) => {
  const response = reservacionesController.buscarPorId(req.params.id);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.delete("/delete-relation/:id/ticket", (req, res) => {
  const response = reservacionesController.eliminarRelacionTicket(req.params.id);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.post("/create", (req, res) => {
  const response = reservacionesController.crear(req.body);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.put("/update/:id", (req, res) => {
  const response = reservacionesController.actualizar(req.body, req.params.id);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.delete("/delete/:id", (req, res) => {
  const response = reservacionesController.eliminar(req.params.id);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

export default router;
