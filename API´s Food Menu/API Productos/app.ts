/*
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

*/
import "reflect-metadata"
import { Conexion } from "./src/utilities/conexion"
import { Categoria } from "./src/entities/categoria.entity"
async function pruebas() {

  /*  try {
  Conexion.initialize().then(() => {
      console.log("Entities registered:", Conexion.entityMetadatas.map(metadata => metadata.name));
  }).catch(error => console.log(error));} catch (error) {
    console.log(error)
  } 
  */
  try {
    
    //Creación categoria
    await Conexion.initialize();
    const categoria2 = new Categoria();
    const categoriaRepo = Conexion.getRepository(Categoria);
    categoria2.setNombre("E");
    await categoriaRepo.save(categoria2);
    console.log("Guardado");
    
    /*
    //Obtencion categorias
    await Conexion.initialize();
    const categoriaRepo = Conexion.getRepository(Categoria);
    const categorias = await categoriaRepo.find();
    console.log("Categorias; ", categorias);
    */
  } catch (error) {
    console.log(error)
  }
}
pruebas();