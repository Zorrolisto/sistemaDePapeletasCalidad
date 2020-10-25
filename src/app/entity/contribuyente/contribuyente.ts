import { Vehiculo } from '../vehiculo/vehiculo';

export class Contribuyente {
    id:number;
    telefono:String;
    correo:String;
    direccion:String;
    vehiculos: Vehiculo[];
}
