import userModel from "../../model/user/index.js";
import userFollowerModel from "../../model/user/userFollower.js";
import bcrypt from "bcrypt";
const userController = {
    getAll: async (req, res) => {
        try {
            const users = await userModel.findAll()
            res.status(200).json(users)

        } catch (error) {
            res.status(404).json({
                message: "Bad Request"
            })
        }
    },
    getOne: async (req, res) => {
        try {
            const params = req.params;
            const users = await userModel.findByPk(params.userId)
            res.status(200).json(users)
        } catch (error) {
            res.json(error)
        }
    },
    update: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const params = req.params;
            const saltRounds = 10;
            const hPass = await bcrypt.hash(password, saltRounds);
            const userUpdate = await userModel.findByPk(params.userId)
            if (!userUpdate) {
                return res.status(404).json({
                    message: "User not found"
                })
            }

            userUpdate.name = name;
            userUpdate.email = email;
            userUpdate.password = hPass;

            await userUpdate.save();

            res.json({
                message: "User updated",
                userUpdate
            })
        } catch (error) {
            res.json(error)
        }

    },
    follow: async (req, res) => {
        try {
            const { userId, followId } = req.body;

            const followUser = await userFollowerModel.create({
                followeeId: followId,
                followerId: userId
            })

            res.json({
                message: "User Followed",
                followUser
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export default userController;