/**
 * Importacion de Control Respectivo
 */
import { CategoriaControl } from "@controller/categoria.control";

//Instancias  
const express = require("express");
const router = express.Router();

//Categoria Control 
const categoriaControl = new CategoriaControl()

//Manejo de Router
router.get("/",categoriaControl.obtenerCategorias);
router.get("/categoria",categoriaControl.obtenerCategorias);

//Exportacion Router
module.exports = router;
