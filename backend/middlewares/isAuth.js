import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token
        console.log("SECRET:", process.env.JWT_SECRET)


        if (!token) {
            return res.status(401).json({ message: "token not found" })
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = verifyToken.userId

        next()
    } catch (error) {
        console.log("JWT ERROR:", error.message)
        return res.status(401).json({ message: "Invalid or expired token" })
    }
}

export default isAuth
