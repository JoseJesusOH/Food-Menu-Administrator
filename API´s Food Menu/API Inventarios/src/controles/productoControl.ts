import { ProductoIDAO } from "@data.dao/producto.dao"
import { ProductoDAO } from "@data.impl/producto.dao.impl"
import { ProductoIServicio } from "@service.dao/producto.dao"
import { ProductoService } from "@service.impl/producto.dao.impl"
import { plainToInstance } from "class-transformer";
import { Logger } from "winston";
import { Producto } from "@entity/producto.entity";
import { LoggerAPI } from "@utility/logger";
class ProductoControl {
    productoServicio: ProductoIServicio=new ProductoService();

    agregarProducto = async (req, res, next) => {
      LoggerAPI.info("Se inicio el proceso de agregar un nuevo prducto en control"); 
      try {
         const producto= plainToInstance(Producto,req.body);
         const result = await this.productoServicio.agregarProducto(producto);
         if(result){
            LoggerAPI.info("Se agrego un nuevo producto en control"); 
            return res.status(201).json({message:"Producto Agregado",producto:result});
         }
         else{
            LoggerAPI.error("No se pudo agregar el producto en control"); 
            return res.status(400).json({message:"No se pudo agregar el producto"});
         }
      } catch (error) {
         LoggerAPI.error("Error al agregar el producto en control: "+error); 
         return res.status(500).json({message:"Error al agregar el producto"});
      }

    }

            /**
     * Elimina un producto existente.
     * El id del producto se recibe en req.params.id.
     */
    eliminarProducto = async (req, res, next) => {
       LoggerAPI.info("Se inicio el proceso de eliminar un producto en control"); 
       try {
          const productoUuid=req.params.productoUuid;
            const result = await this.productoServicio.eliminarProducto(productoUuid);
            if(result){
               LoggerAPI.info("Se elimino el producto en control"); 
               return res.status(200).json({message:"Producto Eliminado"});
            }
            else{
               LoggerAPI.error("No se pudo eliminar el producto en control"); 
               return res.status(400).json({message:"No se pudo eliminar el producto"});
            }
         } catch (error) {
            LoggerAPI.error("Error al eliminar el producto en control: "+error); 
            return res.status(500).json({message:"Error al eliminar el producto"});
         }
    }

  
  

}
export { ProductoControl }