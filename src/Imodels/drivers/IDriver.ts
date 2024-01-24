import { Model } from 'sequelize'

interface driverAttributes {
    id: number;
    identificacion: string;
    apellido: string;
    nombre: string;
    telefono: string;
    direccion: string;
    createdAt?: Date;
    updatedAt?: Date;
    userID?: any;
}

export class Driver extends Model<driverAttributes> implements driverAttributes {
    public id!: number;
    public identificacion!: string;
    public apellido!: string;
    public nombre!: string;
    public telefono!: string;
    public direccion!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public userID!: any;
}