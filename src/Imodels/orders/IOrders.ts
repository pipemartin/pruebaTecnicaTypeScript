import { Model } from 'sequelize'

interface orderAttributes {
    id: number;
    tipoPedido: string;
    direccion: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Order extends Model<orderAttributes> implements orderAttributes {
    public id!: number;
    public tipoPedido!: string;
    public direccion!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}