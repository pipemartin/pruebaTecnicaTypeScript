import { Model } from "sequelize";

export interface driverAttributes {
    id: any;
    identificacion: string;
    apellido: string;
    nombre: string;
    telefono: string;
    direccion: string;
    createdAt?: Date;
    updatedAt?: Date;
    userID?: string | number
}

export class DriverController extends Model<driverAttributes> implements driverAttributes{
    public id: any;
    public identificacion!: string;
    public apellido!: string;
    public nombre!: string;
    public telefono!: string;
    public direccion!: string;
    public userID!: string | number;
}