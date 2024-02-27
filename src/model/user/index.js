import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const userModel = sequelize.define(
    "User",
    {
        name: {
            type: DataTypes.STRING(100)
        },
        email: {
            type: DataTypes.STRING(100)
        },
        password: {
            type: DataTypes.STRING
        }
    },{
        paranoid: true
    })

export default userModel;