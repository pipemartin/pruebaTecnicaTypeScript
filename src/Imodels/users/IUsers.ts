import {  Model } from 'sequelize'

interface userAttributes {
    id: number;
    email: string;
    password: string;
    // timestamps
    createdAt?: Date;
    updatedAt?: Date;
}

export class User extends Model<userAttributes> implements userAttributes {
    public id!: number;
    public email!: string;
    public password!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}