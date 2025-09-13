
import "reflect-metadata"
import { DataSource } from "typeorm"
import {Categoria} from "../modelos/categoria"
import {Direccion} from "../modelos/direccion"
import {Permiso} from "../modelos/permiso"
import {PermisoCategoria} from "../modelos/permisoCategoria"
import {Persona} from "../modelos/persona"
import {Usuario} from "../modelos/usuario"
import {UsuarioCategoria} from "../modelos/usuarioCategoria"


export const Conexion = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "api_perfiles",
    synchronize: true,
    logging: true,
    entities: [Categoria,Direccion,Permiso,PermisoCategoria,Persona,Usuario, UsuarioCategoria],
    subscribers: [],
    migrations: [],
})

