import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
    const head = req.headers;
    let token = head.authorization;
    token = token.split(" ");
    token = token[1]
    try {
        const user = jwt.verify(token, process.env.JWT_SK)
        console.log(user, "Decode");
        req.user = user
    } catch (error) {
        console.log(error);
        return res
            .status(401)
            .json({ message: "Invalid token - please login again" });
    }

    next()

}

export default authMiddleware;