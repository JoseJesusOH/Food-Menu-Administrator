import { UsuarioCategoria } from "../../modelos/usuarioCategoria";
import {UsuarioCategoriaIDAO} from "../interfaces/usuario-categoria.dao"
export class UsuarioCategoriaDAO implements UsuarioCategoriaIDAO{
    getUsuarioCategorias(): UsuarioCategoria[] {
        throw new Error("Method not implemented.");
    }
    getUsuarioCategoriaByID(usuarioCategoriaID: Number): UsuarioCategoria {
        throw new Error("Method not implemented.");
    }
    agregarUsuarioCategoria(usuarioCategoria: UsuarioCategoria): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarUsuarioCategoriaByID(usuarioCategoria: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarUsuarioCategoria(usuarioCategoria: UsuarioCategoria): Boolean {
        throw new Error("Method not implemented.");
    }

}