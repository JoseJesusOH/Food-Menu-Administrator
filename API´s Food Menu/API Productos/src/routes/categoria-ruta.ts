import { CategoriaControl } from "@controller/categoria.control";

const express = require("express");

const router = express.Router();
const categoriaControl = new CategoriaControl()
// Home page route.
router.get("/",categoriaControl.obtenerCategorias);
router.get("/categoria",categoriaControl.obtenerCategorias);
module.exports = router;
