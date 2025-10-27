
import { Compra } from "@entity/compra.entity";
import { ProductoCompra } from "@entity/producto-compra.entity";
import { ProductoStock } from "@entity/producto-stock.entity";
import { Producto } from "@entity/producto.entity";
import { Sucursal } from "@entity/sucursal.entity";
import "reflect-metadata"
import { DataSource } from "typeorm"

const Conexion = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "api_inventarios",
    synchronize: true,
    logging: false,
    entities: [
         Compra,Producto,Sucursal,ProductoCompra,ProductoStock
    ],
    subscribers: [],
    migrations: [],
})

export {Conexion};