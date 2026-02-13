 import express from "express"
import { getCurrentUser, updateAssitant } from "../controllers/user.controllers.js"
import isAuth from "../middlewares/isAuth.js"
import upload from "../middlewares/multer.js"
 
 const userRouter = express.Router()
 
 
 userRouter.get("/current", isAuth , getCurrentUser)
 userRouter.get("/update", isAuth,upload.single("assistantImage") , updateAssitant)
 
 export default userRouter
 