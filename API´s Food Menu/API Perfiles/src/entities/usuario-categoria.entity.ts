
/** 
 * Importaciones TypeORM
 */
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated,
     ManyToOne , JoinColumn
} from "typeorm"

/**
 * Importaciones de Entidades Usuario y Categoria para las relaciones
 */
import { Categoria } from "./categoria.entity"
import { Usuario } from "./usuario.entity"

/**
 * Entidad UsuarioCategoria que representa la tabla usuario_categorias en la base de datos
 */
@Entity("usuario_categorias")
export class UsuarioCategoria {

    /**
     * Identificador único de UsuarioCategoria  
     */
    @PrimaryGeneratedColumn({
        name: "usuario_categoria_id"
    })
     usuarioCategoriaId: Number;

    /**
     * UUID de UsuarioCategoria
     */
    @Column({
        name: "usuario_categoria_uuid"
    })
    @Generated("uuid")
     usuarioCategoriaUuid: String;

    /**
     * Relación muchos a uno con la entidad Usuario
     */
          @ManyToOne(() => Categoria, (Categoria) => Categoria.getPermisoCategorias)
        @JoinColumn({ name: "usuario_id", foreignKeyConstraintName: "usuario_categoria_usuario_idfk" })
    usuario: Usuario;
    
    /**
     * Relación muchos a uno con la entidad Categoria
     */
         @ManyToOne(() => Categoria, (Categoria) => Categoria.getPermisoCategorias)
        @JoinColumn({ name: "categoria_id", foreignKeyConstraintName: "usuario_categoria_categoria_idfk" })
     categoria: Categoria;

    /**
     *  Asigna el id de UsuarioCategoria
     * @param usuarioCategoriaId Id de UsuarioCategoria
     */
    setUsuarioCategoriaId(usuarioCategoriaId: Number): void {
        this.usuarioCategoriaId = usuarioCategoriaId
    }
    /**
     *  Devuelve el id de UsuarioCategoria
     * @returns Id de UsuarioCategoria
     */
    getUsuarioCategoriaId(): Number {
        return this.usuarioCategoriaId
    }
    /**
     *  Asigna el UUID de UsuarioCategoria
     * @param usuarioCategoriaUuid UUID de UsuarioCategoria
     */
    setUsuarioCategoriaUuid(usuarioCategoriaUuid: String): void {
        this.usuarioCategoriaUuid = usuarioCategoriaUuid
    }
    /**
     *  Devuelve el UUID de UsuarioCategoria
     * @returns UUID de UsuarioCategoria
     */
    getUsuarioCategoriaUuid(): String {
        return this.usuarioCategoriaUuid
    }

    /** 
     * Asigna el usuario asociado a la categoría
     * @param usuario El usuario asociado a la categoría
     */ 
    setUsuario(usuario: Usuario): void {
        this.usuario = usuario
    }

    /**
     *  Devuelve el usuario asociado a la categoría
     * @returns El usuario asociado a la categoría
     */
    getUsuario(): Usuario {
        return this.usuario
    }

     /**
      *  Asigna la categoría asociada al usuario
      * @param categoria La categoría asociada al usuario
      */
    setCategoria(categoria: Categoria): void {
        this.categoria = categoria
    }
    /**
     *  Devuelve la categoría asociada al usuario
     * @returns  La categoría asociada al usuario
      */
    getCategoria(): Categoria {
        return this.categoria
    }
}