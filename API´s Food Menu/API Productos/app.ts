import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Ruta ejemplo
app.get("/", (req: Request, res: Response) => {
  res.send("Servidor Express con TypeScript funcionando 🚀");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
