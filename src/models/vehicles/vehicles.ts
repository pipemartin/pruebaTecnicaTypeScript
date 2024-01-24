import {sequelize} from "../../database/connectionDataBase";
import { DataTypes } from 'sequelize'
import { Vehicle } from "../../Imodels/vehicles/IVehicles";

Vehicle.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1,4]
        }
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1,7]
        },
        unique: true
    },
    capacidad: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,7]
        }
    }
}, {
    sequelize: sequelize,
    paranoid: true
})

export default Vehicle