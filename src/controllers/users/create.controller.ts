import { Request, Response } from "express"
import User from "../../models/users/users"
import bcrypt from "bcrypt"
import {UserController, userAttributes} from "../../Imodels/users/IUserControllerCreate"

export const createUser = async (req:Request , res: Response) =>{
    try {
        //encripta la password 
        req.body.password = await bcrypt.hash(req.body.password, 5)
        const {email, password}: UserController = req.body
        //Insert in table db
        const newUserData: userAttributes = {
            id:null,
            email,
            password,
        }
        const newDriver = await User.create(newUserData)
        return res.json(newDriver)
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}