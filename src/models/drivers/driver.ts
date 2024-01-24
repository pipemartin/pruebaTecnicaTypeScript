import {sequelize} from "../../database/connectionDataBase";
import { DataTypes } from 'sequelize'
import Order from "../orders/order";
import Vehicle from "../vehicles/vehicles";
import { Driver } from "../../Imodels/drivers/IDriver";


Driver.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    identificacion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 11],
        },
        unique: true
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 20],
        },
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 20],
        },
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 10],
        },
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50],
        },
    },
    userID: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize: sequelize,
    paranoid: true
})
Driver.hasMany(Order, {
    foreignKey: {
      name: "orderID",
      allowNull: false,
    },
    sourceKey: "id",
  });
  
Order.belongsTo(Driver, {
    foreignKey: {
        name: "orderID",
        allowNull: false,
    },
    targetKey: 'id'
})

Driver.hasMany(Vehicle, {
    foreignKey: {
      name: "conductorID",
      allowNull: true,
    },
    sourceKey: "id",
  });
  
Vehicle.belongsTo(Driver, {
    foreignKey: {
        name: "conductorID",
        allowNull: true,
    },
    targetKey: 'id'
})


export default Driver