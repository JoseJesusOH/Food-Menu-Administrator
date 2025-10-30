
import "reflect-metadata"
import { DataSource } from "typeorm"

const Conexion = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "api_productos",
    synchronize: true,
    logging: false,
    entities: [
    ],
    subscribers: [],
    migrations: [],
})

export {Conexion};