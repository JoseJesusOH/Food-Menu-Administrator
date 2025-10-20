/**
 * @file sucursal.entity.ts
 * @description Define la entidad `Sucursal`, que representa una sucursal o punto de venta dentro del sistema.
 */

/**
 * Representa una sucursal o punto de venta.
 * 
 * Esta clase contiene los datos de identificación y contacto de una sucursal, 
 * incluyendo su dirección y número telefónico.
 */
export class Sucursal {
    /**
     * Identificador numérico de la sucursal.
     */
    sucursalId: Number;

    /**
     * Identificador único universal (UUID) de la sucursal.
     */
    sucursalUuid: String;

    /**
     * Nombre o razón social de la sucursal.
     */
    nombre: String;

    /**
     * Dirección física de la sucursal.
     */
    direccion: String;

    /**
     * Número telefónico de contacto de la sucursal.
     */
    telefono: String;

    /**
     * Crea una nueva instancia de la clase Sucursal.
     * 
     * @param sucursalId - Identificador único de la sucursal.
     */
    constructor(sucursalId: Number) {
        this.sucursalId = sucursalId;
    }

    /** @returns El identificador numérico de la sucursal. */
    getSucursalId(): Number {
        return this.sucursalId;
    }

    /** @returns El UUID de la sucursal. */
    getSucursalUuid(): String {
        return this.sucursalUuid;
    }

    /** @returns El nombre de la sucursal. */
    getNombre(): String {
        return this.nombre;
    }

    /** @returns La dirección de la sucursal. */
    getDireccion(): String {
        return this.direccion;
    }

    /** @returns El número telefónico de la sucursal. */
    getTelefono(): String {
        return this.telefono;
    }

    /**
     * Establece el identificador numérico de la sucursal.
     * @param sucursalId - Identificador numérico.
     */
    setSucursalId(sucursalId: Number): void {
        this.sucursalId = sucursalId;
    }

    /**
     * Establece el UUID de la sucursal.
     * @param sucursalUuid - Identificador único universal.
     */
    setSucursalUuid(sucursalUuid: String): void {
        this.sucursalUuid = sucursalUuid;
    }

    /**
     * Establece el nombre de la sucursal.
     * @param nombre - Nombre o razón social.
     */
    setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    /**
     * Establece la dirección física de la sucursal.
     * @param direccion - Dirección completa.
     */
    setDireccion(direccion: String): void {
        this.direccion = direccion;
    }

    /**
     * Establece el número telefónico de la sucursal.
     * @param telefono - Teléfono de contacto.
     */
    setTelefono(telefono: String): void {
        this.telefono = telefono;
    }
}
