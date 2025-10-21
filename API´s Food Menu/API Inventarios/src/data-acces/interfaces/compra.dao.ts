/** 
 * Importación de la entidad requerida
 */
import { Compra } from "@entity/compra.entity"

/**
 * Interface de Acceso a Datos para la entidad Compra
 */
export interface CompraIDAO {
    /** 1
     * Obtiene la lista completa de compras registradas.
     * @returns Un arreglo con todas las compras.
     */
    getCompras(): Promise<Compra[]>;

    /** 2
     * Busca una compra a partir de su identificador numérico.
     * @param compraId Identificador numérico de la compra.
     * @returns La compra correspondiente al ID, o null si no existe.
     */
    getCompraById(compraId: Number): Promise<Compra>;

    /** 3
     * Busca una compra a partir de su identificador único (UUID).
     * @param compraUuid Identificador UUID de la compra.
     * @returns La compra correspondiente al UUID, o null si no existe.
     */
    getCompraByUuid(compraUuid: String): Promise<Compra>;

    /** 4
     * Elimina una compra usando su identificador numérico.
     * @param compraId Identificador numérico de la compra.
     * @returns True si la compra fue eliminada, False en caso contrario.
     */
    eliminarCompraById(compraId: Number): Promise<Boolean>;

    /** 5
     * Actualiza la información de una compra existente.
     * @param compra Objeto de tipo Compra con los nuevos valores.
     * @returns True si la actualización fue exitosa, False en caso contrario.
     */
    actualizarCompra(compra: Compra): Promise<Boolean>;

    /** 6
     * Agrega una nueva compra a la base de datos.
     * @param compra Objeto de tipo Compra a agregar.
     * @returns True si la inserción fue exitosa, False en caso contrario.
     */
    agregarCompra(compra: Compra): Promise<Boolean>;
}
