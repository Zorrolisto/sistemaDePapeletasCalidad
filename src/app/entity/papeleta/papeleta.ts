import { Contribuyente } from '../contribuyente/contribuyente';
import { Infraccion } from '../infraccion/infraccion';
import { Tasa } from '../tasa/tasa';
import { Vehiculo } from '../vehiculo/vehiculo';

export class Papeleta {
    id:number;
    fechaImposicion:Date;
    fechaRegistro:Date;
    hora:String;
    lugar:String;
    observacion:String;
    licencia:string;
    montoBruto:number;
    situacion:String;
    infraccion:Infraccion;
    propietario:Contribuyente;
    infractor:Contribuyente;
    vehiculo:Vehiculo;
    tasa:Tasa;
}
