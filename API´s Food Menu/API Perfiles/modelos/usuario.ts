import {Persona} from "./persona"
export class Usuario{
    private usuarioID:Number;
    private usuarioUUID: String;
    private usuario: String;
    private password: String;
    private correo: String;
    private persona: Persona;

    setUsuarioID(usuarioID:Number):void{
        this.usuarioID=usuarioID
    }
    getUsuarioID():Number{
        return this.usuarioID
    }
    setUsuarioUUID(usuarioUUID:String):void{
        this.usuarioUUID=usuarioUUID
    }
    getUsuarioUUID():String{
        return this.usuarioUUID
    }
    setUsuario(usuario:String):void{
        this.usuario=usuario
    }
    getUsuario():String{
        return this.usuario
    }
    setPassword(password:String):void{
        this.password=password
    }
    getPassword():String{
        return this.password
    }
    setCorreo(correo:String):void{
        this.correo=correo
    }
    getCorreo():String{
        return this.correo
    }
    setPersona(persona:Persona):void{
        this.persona=persona
    }
    getPersona():Persona{
        return this.persona
    }
}