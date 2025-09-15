
import "reflect-metadata"
import { DataSource } from "typeorm"
import {Categoria} from "@entity/categoria.entity"
import {Direccion} from "@entity/direccion.entity"
import {Permiso} from "@entity/permiso.entity"
import {PermisoCategoria} from "@entity/permiso-categoria.entity"
import {Persona} from "@entity/persona.entity"
import {Usuario} from "@entity/usuario.entity"
import {UsuarioCategoria} from "@entity/usuario-categoria.entity"


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

