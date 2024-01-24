import { Model } from 'sequelize'

interface vehiclesAttributes {
    id: number;
    modelo: string;
    placa: string;
    capacidad: string;
    createdAt?: Date;
    updatedAt?: Date;
    conductorID?: any;
}

export class Vehicle extends Model<vehiclesAttributes> implements vehiclesAttributes {
    public id!: number;
    public modelo!: string;
    public placa!: string;
    public capacidad!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    // puede ser null sino envian el dato 
    public conductorID!: any;
}