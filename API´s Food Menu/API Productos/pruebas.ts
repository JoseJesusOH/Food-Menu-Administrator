import "reflect-metadata"
import { Conexion } from "../API Productos/utilidades/conexion"
import { Categoria } from "./modelos/categoria"
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