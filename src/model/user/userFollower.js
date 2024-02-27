import userModel from "./index.js";
import sequelize from "../../db/config.js";

const userFollowerModel = sequelize.define("UserFollower", {})

userFollowerModel.belongsTo(userModel, { as: 'follower' })
userFollowerModel.belongsTo(userModel, { as: 'followee' })

userModel.belongsToMany(userModel, { through: userFollowerModel, as: "follower", foreignKey: "followeeId" })
userModel.belongsToMany(userModel, { through: userFollowerModel, as: "followee", foreignKey: "followerId" })



export default userFollowerModel