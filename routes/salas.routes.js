import express from "express";
import salasController from "../controllers/salas.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  const response = salasController.mostrarSalas();
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

router.post("/create", (req, res) => {
  const response = salasController.crear(req.body);
  res
    .status(response.status)
    .json({ data: response.data, message: response.message });
});

export default router;
