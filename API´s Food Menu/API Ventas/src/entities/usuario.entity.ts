 class Usuario {
     usuarioId: Number;
     usuarioUuid: String;
     nombre: String;

    
    /** Obtiene el ID del usuario. */
    getUsuarioId(): Number {
        return this.usuarioId;
    }

    /** Establece el ID del usuario. */
    setUsuarioId(value: Number): void {
        this.usuarioId = value;
    }

    /** Obtiene el UUID del usuario. */
    getUsuarioUuid(): String {
        return this.usuarioUuid;
    }

    /** Establece el UUID del usuario. */
    setUsuarioUuid(value: String): void {
        this.usuarioUuid = value;
    }

    /** Obtiene el nombre del usuario. */
    getNombre(): String {
        return this.nombre;
    }

    /** Establece el nombre del usuario. */
    setNombre(value: String): void {
        this.nombre = value;
    }
}

export {Usuario}