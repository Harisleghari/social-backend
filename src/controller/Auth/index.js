import jwt from "jsonwebtoken";
import userModel from "../../model/user/index.js";
import bcrypt from "bcrypt";

const authController = {
    login: async (req, res) => {
        const payload = req.body;
        const user = await userModel.findOne({
            where: { email: payload.email }
        })

        if (!user) {
            res.status(401).json({
                message: "Invalid Credentials"
            })
        }

        const result = await bcrypt.compare(payload.password, user.password);
        if (!result) {
            return res.status(401).json({
                message: "Invalid credentials"
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
    },
    register: async (req, res) => {
        const payload = req.body;
        const saltRounds = 10;
        const hPass = await bcrypt.hash(payload.password, saltRounds);

        const user = userModel.create({
            name: payload.name,
            email: payload.email,
            password: hPass
        })

        res.json({
            message: "User Registered"
        })
    }
}

export default authController