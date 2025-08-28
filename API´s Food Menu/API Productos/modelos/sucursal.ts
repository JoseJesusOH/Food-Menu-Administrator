export class Sucursal{
    private sucursalID: Number;
    private sucursalUUID: String;
    private nombre: String
    private direccion: String
    private telefono: String
      getSucursalID(): Number{
        return this.sucursalID;
      }
     getSucursalUUID(): String{
      return this.sucursalUUID;
     }
     getNombre(): String{
        return this.nombre;
     }
      getDireccion(): String{
return this.direccion;
      }
      getTelefono(): String{
        return this.telefono;
      }
      setSucursalID(sucursalID: Number): void{
        this.sucursalID=sucursalID;
      }
     setSucursalUUID(sucursalUUID :String):void{
       this.sucursalUUID=sucursalUUID;
     }
     setNombre(nombre: String):void{
        this.nombre=nombre;
     }
     setDireccion(direccion: String):void{
        this.direccion=direccion;
     }
      setTelefono(telefono: String):void{
       this.telefono=telefono;
      }
}