import express from "express";
import peliculasController from "../controllers/peliculas.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  const response = peliculasController.mostrarPeliculas();

  res.status(response.status).json({
    data: response.data,
    message: response.message,
  });
});

router.post("/create", (req, res) => {
  const response = peliculasController.crear(req.body);

  res.status(response.status).json({
    data: response.data,
    message: response.message,
  });
});

router.put("/update/:id", (req, res) => {
  const response = peliculasController.actualizar(req.body, req.params.id);
  res.status(response.status).json({
    data: response.data,
    message: response.message,
  });
});

export default router;
