import {Persona} from "./persona"
export class Direccion{
    private direccionID:Number;
    private direccionUUID:String;
    private calle:String;
    private numero: String;
    private asentamiento: String;
    private persona:Persona;
    setDireccionID(direccionID:Number):void{
        this.direccionID=direccionID
    }
    getDireccionID():Number{
        return this.direccionID
    }
    setDireccionUUID(direccionUUID:String):void{
        this.direccionUUID=direccionUUID
    }
    getDireccionUUID():String{
        return this.direccionUUID
    }
    setCalle(calle:String):void{
        this.calle=calle
    }
    getCalle():String{
        return this.calle
    }
    setNumero(numero:String):void{
        this.numero=numero
    }
    getNumero():String{
        return this.numero
    }
    setAsentamiento(asentamiento:String):void{
        this.asentamiento=asentamiento
    }
    getAsentamiento():String{
        return this.asentamiento
    }
    setPersona(persona:Persona):void{
        this.persona=persona
    }
    getPersona():Persona{
        return this.persona
    }
}