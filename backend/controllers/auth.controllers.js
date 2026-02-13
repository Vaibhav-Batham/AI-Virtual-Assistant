import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

// sign up controller
export const signUp = async (req, res) => {
    try {
        const { name, assistantName, email, password } = req.body

        const existEmail = await User.findOne({ email })
        if (existEmail) {
            return res.status(400).json({ message: "email already exists!" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "password must be atleast 6 character !" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            assistantName,
            email,
            password: hashedPassword,
        });

        const token = await genToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "lax",   // ✅ FIXED
            secure: false,
        });

        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            user,
        });

    } catch (error) {
        return res.status(500).json({ message: `sign up error ${error}` })
    }
}


// log in controller
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "email does not exist!" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: "incorrect password" })
        }

        const token = await genToken(user._id)

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "lax",   // ✅ FIXED
            secure: false
        })

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({ message: `login error ${error}` })
    }
}


// logout controller
export const logOut = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "log out successfully" })
    } catch (error) {
        return res.status(500).json({ message: `logout error ${error}` })
    }
}
