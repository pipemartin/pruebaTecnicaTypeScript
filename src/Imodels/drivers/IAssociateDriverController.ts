import { Model } from "sequelize";

export interface associateAttributes {
    idDriver: string;
}

export class Associate extends Model<associateAttributes> implements associateAttributes{
    public idDriver!: any;
}