export class Categoria {
    private categoriaID: Number;
    private nombre: String;
    private categoriaUUID: String;

    getCategoriaID(): Number {
        return this.categoriaID;
    }
    setCategoriaID(categoriaID: Number): void {
        this.categoriaID = categoriaID;
    }
    getNombre(): String {
        return this.nombre;
    }
    setNombre(nombre: String): void {
        this.nombre = nombre;
    }
    getCategoriaUUID(): String {
        return this.categoriaUUID;
    }
    setCategoriaUUID(categoriaUUID: String): void {
        this.categoriaUUID = categoriaUUID;
    }
}