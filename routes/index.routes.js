import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/vistas/peliculas", (req, res) => res.render("peliculas"));
router.get("/vistas/salas", (req, res) => res.render("salas"));
router.get("/vistas/funciones", (req, res) => res.render("funciones"));
router.get("/vistas/tickets", (req, res) => res.render("tickets"));
router.get("/vistas/reservaciones", (req, res) => res.render("reservaciones"));

export default router;
