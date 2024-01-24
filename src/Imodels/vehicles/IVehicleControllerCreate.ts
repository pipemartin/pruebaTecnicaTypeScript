import { Model } from "sequelize";

export interface vehicleAttributes {
    id: any;
    modelo: string;
    placa: string;
    capacidad: string;
    conductorID: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export class VehicleController extends Model<vehicleAttributes> implements vehicleAttributes{
    public id: any;
    public modelo!: string;
    public placa!: string;
    public capacidad!: string;
    public conductorID!: number;
}