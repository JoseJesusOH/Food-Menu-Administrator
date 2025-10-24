/**
 * Importación del DTO de Compra.
 * Representa la estructura de datos que se transfiere entre capas.
 */
import { CompraDTO } from "@dto/compra.dto";

/**
 * Interfaz que define los métodos del servicio de Compras.
 * Todos los servicios que implementen esta interfaz deben cumplir con estas operaciones.
 */
interface CompraIServicio {

    /**
     * Obtiene todas las compras registradas en el sistema.
     * @return Arreglo de objetos CompraDTO que representan todas las compras.
     */
    getCompras(): Promise<CompraDTO[]>;

    /**
     * Registra una nueva compra a partir de los datos proporcionados.
     * @param compra Datos de la compra a registrar.
     * @return Boolean indicando si la operación fue exitosa o no.
     */
    agregarCompra(compra: CompraDTO): Promise<Boolean>;

    /**
     * Actualiza una compra existente con los datos proporcionados.
     * @param compra Datos de la compra a actualizar.
     * @return Boolean indicando si la operación fue exitosa o no.
     */
    actualizarCompra(compra: CompraDTO): Promise<Boolean>;

    /**
     * Elimina una compra utilizando su identificador único (UUID).
     * @param compraUuid Identificador único de la compra.
     * @return Boolean indicando si la operación de eliminación fue exitosa o no.
     */
    eliminarCompra(compraUuid: string): Promise<Boolean>;

    /**
     * Obtiene una compra específica a partir de su UUID.
     * @param compraUuid Identificador único de la compra.
     * @return Objeto CompraDTO correspondiente a la compra buscada.
     */
    getCompraByUuid(compraUuid: string): Promise<CompraDTO>;
}

export { CompraIServicio };
