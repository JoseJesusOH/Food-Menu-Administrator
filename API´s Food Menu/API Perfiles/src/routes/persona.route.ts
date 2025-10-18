/**
 * Importación del Control Respectivo
 */
import { PersonaControl } from "@controller/persona.control";

// Instancias
const express = require("express");
const router = express.Router();

// Persona Control
const personaControl = new PersonaControl();

// Manejo de Router
router.get("/", personaControl.getPersonas);

router.get("/persona/:uuid", personaControl.getPersonaByUuid);

router.post("/", personaControl.agregarPersona);

router.put("/", personaControl.actualizarPersona);

router.delete("/persona/:personaUuid", personaControl.eliminarPersonaByUuid);

// Exportación Router
module.exports = router;
