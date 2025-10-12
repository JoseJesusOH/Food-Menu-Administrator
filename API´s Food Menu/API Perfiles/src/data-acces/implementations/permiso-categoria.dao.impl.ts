/**
 * Importaciones requeridas el modelo PermisoCategoria e interface PermisoCategoriaIDAO
 */
import { PermisoCategoria } from "@entity/permiso-categoria.entity";
import {PermisoCategoriaIDAO} from "@data.dao/permiso-categoria.dao"
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Implementacion del acceso a datos de PermisoCategoriaDAO
 */
export class PermisoCategoriaDAO implements PermisoCategoriaIDAO {
    permisoCategoriaRepository = Conexion.getRepository(PermisoCategoria);

    /**
     * Actualiza una relación de permiso-categoría.
     */
    async actualizarPermisoCategoria(permisoCategoria: PermisoCategoria): Promise<Boolean> {
        LoggerAPI.info("Inicio - actualizarPermisoCategoria - PermisoCategoriaDAO");
        try {
            const existing = await this.permisoCategoriaRepository.findOneBy({ permisoCategoriaId: permisoCategoria.permisoCategoriaId });
            if (!existing) {
                LoggerAPI.warn("No se encontró el permiso-categoría para actualizar - actualizarPermisoCategoria - PermisoCategoriaDAO");
                return false;
            }
            await this.permisoCategoriaRepository.save(permisoCategoria);
            LoggerAPI.info("Fin - actualizarPermisoCategoria - PermisoCategoriaDAO");
            return true;
        } catch (error) {
            LoggerAPI.error("Error - actualizarPermisoCategoria - PermisoCategoriaDAO", error);
            throw new Error("Error al actualizar el permiso-categoría");
        }
    }

   

    /**
     * Obtiene todas las relaciones de permisos con respecto a categoría.
     */
    async getPermisoCategorias(): Promise<PermisoCategoria[]> {
        LoggerAPI.info("Inicio - getPermisoCategorias - PermisoCategoriaDAO");
        try {
            const permisosCategorias: PermisoCategoria[] = await this.permisoCategoriaRepository.find();
            if (permisosCategorias.length === 0) {
                LoggerAPI.warn("No se encontraron permisos categorías - getPermisoCategorias - PermisoCategoriaDAO");
                return [];
            }
            LoggerAPI.info("Fin - getPermisoCategorias - PermisoCategoriaDAO");
            return permisosCategorias;
        } catch (error) {
            LoggerAPI.error("Error - getPermisoCategorias - PermisoCategoriaDAO", error);
            throw new Error("Error al obtener los permisos categorías");
        }
    }

    /**
     * Obtiene la relación con respecto al ID.
     */
    async getPermisoCategoriaById(permisoCategoriaId: Number): Promise<PermisoCategoria> {
        LoggerAPI.info("Inicio - getPermisoCategoriaByID - PermisoCategoriaDAO");
        try {
            const permisoCategoria = await this.permisoCategoriaRepository.findOneBy({ permisoCategoriaId: Number(permisoCategoriaId) });
            if (!permisoCategoria) {
                LoggerAPI.warn("No se encontró el permiso-categoría con el ID proporcionado - getPermisoCategoriaByID - PermisoCategoriaDAO");
                return null;
            }
            LoggerAPI.info("Fin - getPermisoCategoriaByID - PermisoCategoriaDAO");
            return permisoCategoria;
        } catch (error) {
            LoggerAPI.error("Error - getPermisoCategoriaByID - PermisoCategoriaDAO", error);
            throw new Error("Error al obtener el permiso-categoría con el ID proporcionado");
        }
    }
    /**
     * Obtiene la relación con respecto al UUID.
     */
    async getPermisoCategoriaByUuid(permisoCategoriaUuid: String): Promise<PermisoCategoria> {
        LoggerAPI.info("Inicio - getPermisoCategoriaByID - PermisoCategoriaDAO");
        try {
            const permisoCategoria = await this.permisoCategoriaRepository.findOneBy({ permisoCategoriaUuid });
            if (!permisoCategoria) {
                LoggerAPI.warn("No se encontró el permiso-categoría con el ID proporcionado - getPermisoCategoriaByID - PermisoCategoriaDAO");
                return null;
            }
            LoggerAPI.info("Fin - getPermisoCategoriaByID - PermisoCategoriaDAO");
            return permisoCategoria;
        } catch (error) {
            LoggerAPI.error("Error - getPermisoCategoriaByID - PermisoCategoriaDAO", error);
            throw new Error("Error al obtener el permiso-categoría con el ID proporcionado");
        }
    }
    /**
     * Agrega una nueva relación de permiso-categoría.
     */
    async agregarPermisoCategoria(permisoCategoria: PermisoCategoria): Promise<Boolean> {
        LoggerAPI.info("Inicio - agregarPermisoCategoria - PermisoCategoriaDAO");
        try {
            const result = await this.permisoCategoriaRepository.save(permisoCategoria);
            if (result) {
                LoggerAPI.info("Fin - agregarPermisoCategoria - PermisoCategoriaDAO");
                return true;
            }
            LoggerAPI.warn("No se pudo agregar el permiso-categoría - agregarPermisoCategoria - PermisoCategoriaDAO");
            return false;
        } catch (error) {
            LoggerAPI.error("Error - agregarPermisoCategoria - PermisoCategoriaDAO", error);
            throw new Error("Error al agregar el permiso-categoría");
        }
    }

    /**
     * Elimina un permiso-categoría con respecto al ID.
     */
    async eliminarPermisoCategoriaById(permisoCategoriaId: Number): Promise<Boolean> {
        LoggerAPI.info("Inicio - eliminarPermisoCategoriaByID - PermisoCategoriaDAO");
        try {
            const result = await this.permisoCategoriaRepository.delete({permisoCategoriaId: Number(permisoCategoriaId)});
            if (result.affected && result.affected > 0) {
                LoggerAPI.info("Fin - eliminarPermisoCategoriaByID - PermisoCategoriaDAO");
                return true;
            }
            LoggerAPI.warn("No se pudo eliminar el permiso-categoría con el ID proporcionado - eliminarPermisoCategoriaByID - PermisoCategoriaDAO");
            return false;
        } catch (error) {
            LoggerAPI.error("Error - eliminarPermisoCategoriaByID - PermisoCategoriaDAO", error);
            throw new Error("Error al eliminar el permiso-categoría");
        }
    }
}