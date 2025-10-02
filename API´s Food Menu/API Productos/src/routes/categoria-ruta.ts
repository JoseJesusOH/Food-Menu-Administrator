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
router.get("/categoria",categoriaControl.obtenerCategoriaByUuid);
router.post("/",categoriaControl.agregarCategoria);
router.delete("/",categoriaControl.eliminarCategoria)
router.put("/",categoriaControl.actualizarCategoria)

//Exportacion Router
module.exports = router;
