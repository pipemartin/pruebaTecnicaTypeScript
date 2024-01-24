import {sequelize} from "../../database/connectionDataBase";
import {DataTypes} from 'sequelize'
import Driver from '../drivers/driver'
import { User } from "../../Imodels/users/IUsers";

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: sequelize,
    paranoid: true
});

User.hasMany(Driver, {
    foreignKey: {
        name: "userID",
        allowNull: false,
      },
    sourceKey: 'id'
});

Driver.belongsTo(User, {
    foreignKey: {
        name: "userID",
        allowNull: false,
    }, 
    targetKey: 'id'
});


export default User