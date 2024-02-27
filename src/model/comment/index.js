import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import postModel from "../post/index.js";
import userModel from "../user/index.js";

const commentModel = sequelize.define(
    "Comment",
    {
        comment: {
            type: DataTypes.STRING
        }
    },
    {
        paranoid: true
    }
    )

    postModel.hasMany(commentModel)
    commentModel.belongsTo(postModel)

    userModel.hasMany(commentModel)
    commentModel.belongsTo(userModel)

export default commentModel