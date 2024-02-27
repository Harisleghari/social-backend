import userModel from "../../model/user/index.js";
import userFollowerModel from "../../model/user/userFollower.js";
const userController = {
    create: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const userCreate = await userModel.create({
                name: name,
                email: email,
                password: password
            })

            res.json({
                message: "User Created",
                userCreate
            })
        } catch (error) {
            console.log(error);
        }

    },
    update: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const params = req.params;
            const userUpdate = await userModel.findByPk(params.userId)
            if (!userUpdate) {
                return res.status(404).json({
                    message: "User not found"
                })
            }

            userUpdate.name = name;
            userUpdate.email = email;
            userUpdate.password = password;

            await userUpdate.save();

            res.json({
                message: "User updated",
                userUpdate
            })
        } catch (error) {
            console.log(error);
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