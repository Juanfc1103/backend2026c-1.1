import express from "express";
import funcionesController from "../controllers/funciones.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  const response = funcionesController.mostrarFunciones();
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.post("/create", (req, res) => {
  const response = funcionesController.crear(req.body);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.put("/update/:id", (req, res) => {
  const response = funcionesController.actualizar(req.body, req.params.id);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.delete("/delete/:id", (req, res) => {
  const response = funcionesController.eliminar(req.params.id);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

export default router;
