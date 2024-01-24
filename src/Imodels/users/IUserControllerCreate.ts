import { Model } from "sequelize";

export interface userAttributes {
    id: any;
    email: string;
    password: string;
}

export class UserController extends Model<userAttributes> implements userAttributes{
    public id: any;
    public email!: string;
    public password!: string;
}