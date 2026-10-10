import express from "express";
import reservacionesController from "../controllers/reservaciones.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  const response = reservacionesController.mostrarReservaciones();
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
