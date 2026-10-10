import express from "express";
import ticketsController from "../controllers/tickets.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  const response = ticketsController.mostrarTickets();
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

export default router;
