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

  
  
    obtenerProductos = async (req, res, next) => {
      LoggerAPI.info("Se inicio el proceso de obtener productos en control");
      try {
         const result = await this.productoServicio.getProductos();
         if(result){
            LoggerAPI.info("Se obtuvieron los productos en control"); 
            return res.status(200).json({productos:result});
         }
         else{
            LoggerAPI.error("No se pudieron obtener los productos en control"); 
            return res.status(404).json({message:"No se encontraron productos"});
         }
      } catch (error) {
         LoggerAPI.error("Error al obtener los productos en control: "+error); 
         return res.status(500).json({message:"Error al obtener los productos"});
      }
    }

 
    obtenerProductoByUuid = async (req, res, next) => {
      LoggerAPI.info("Se inicio el proceso de obtener un producto por uuid en control");
      try {
         const productoUuid=req.params.productoUuid;
         const result = await this.productoServicio.getProductoByUuid(productoUuid);
         if(result){
            LoggerAPI.info("Se obtuvo el producto por uuid en control"); 
            return res.status(200).json({producto:result});
         }
         else{
            LoggerAPI.error("No se pudo obtener el producto por uuid en control"); 
            return res.status(404).json({message:"No se encontro el producto"});
         }
      } catch (error) {
         LoggerAPI.error("Error al obtener el producto por uuid en control: "+error); 
         return res.status(500).json({message:"Error al obtener el producto"});
      }
    }

    actualizarProducto = async (req, res, next) => {
         LoggerAPI.info("Se inicio el proceso de actualizar un producto en control");
         try { 
            const producto= plainToInstance(Producto,req.body);
            const result = await this.productoServicio.actualizarProducto(producto);
            if(result){
               LoggerAPI.info("Se actualizo el producto en control"); 
               return res.status(200).json({message:"Producto Actualizado",producto:result});
            }
            else{
               LoggerAPI.error("No se pudo actualizar el producto en control"); 
               return res.status(400).json({message:"No se pudo actualizar el producto"});
            }
         } catch (error) {
            LoggerAPI.error("Error al actualizar el producto en control: "+error); 
            return res.status(500).json({message:"Error al actualizar el producto"});
         }
    }
}
export { ProductoControl }