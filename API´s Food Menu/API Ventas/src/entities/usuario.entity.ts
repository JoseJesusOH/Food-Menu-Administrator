 class Usuario {
     usuarioID: Number;
     usuarioUUID: String;
     nombre: String;

    
    /** Obtiene el ID del usuario. */
    getUsuarioID(): number {
        return this.usuarioID;
    }

    /** Establece el ID del usuario. */
    setUsuarioID(value: number): void {
        this.usuarioID = value;
    }

    /** Obtiene el UUID del usuario. */
    getUsuarioUUID(): string {
        return this.usuarioUUID;
    }

    /** Establece el UUID del usuario. */
    setUsuarioUUID(value: string): void {
        this.usuarioUUID = value;
    }

    /** Obtiene el nombre del usuario. */
    getNombre(): string {
        return this.nombre;
    }

    /** Establece el nombre del usuario. */
    setNombre(value: string): void {
        this.nombre = value;
    }
}

export {Usuario}