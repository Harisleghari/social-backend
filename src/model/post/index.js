import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import userModel from "../user/index.js";

const postModel = sequelize.define(
    "Post",
    {
        title: {
            type: DataTypes.STRING(90),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(950)
        }
    },
    {
        paranoid: true
    }
    );
    userModel.hasMany(postModel);
    postModel.belongsTo(userModel);

export default postModel;