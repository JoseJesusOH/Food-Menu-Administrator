 class Usuario {
     usuarioID: Number;
     usuarioUUID: String;
     nombre: String;

    
    /** Obtiene el ID del usuario. */
    getUsuarioID(): Number {
        return this.usuarioID;
    }

    /** Establece el ID del usuario. */
    setUsuarioID(value: Number): void {
        this.usuarioID = value;
    }

    /** Obtiene el UUID del usuario. */
    getUsuarioUUID(): String {
        return this.usuarioUUID;
    }

    /** Establece el UUID del usuario. */
    setUsuarioUUID(value: String): void {
        this.usuarioUUID = value;
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