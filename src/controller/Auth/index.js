import jwt from "jsonwebtoken";
import userModel from "../../model/user/index.js";

const authController = {
    login: async (req, res) => {
        const payload = req.body;
        const user = await userModel.findOne({
            where: { email: payload.email, password: payload.password }
        })

        if (!user) {
            res.status(401).json({
                message: "Invalid Credentials"
            })
        }

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email
        },
        process.env.JWT_SK,
        {
            expiresIn: "59m"
        }
        )

        res.json({
            message: "User Valid",
            token
        })
    }
}

export default authController