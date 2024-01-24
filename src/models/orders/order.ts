import {sequelize} from "../../database/connectionDataBase";
import { DataTypes } from 'sequelize'
import {Order} from "../../Imodels/orders/IOrders";

Order.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoPedido: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1,20]
        }
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,50]
        }
    }
}, {
    sequelize: sequelize,
    paranoid: true
})

export default Order