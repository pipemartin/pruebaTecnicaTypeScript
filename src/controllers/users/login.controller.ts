import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from "../../models/users/users"
import { Request, Response } from 'express'

export const loginUser = async (req: Request, res: Response) =>{
    try {
        const {email, password} = req.body
        const user = await User.findAll({
            where: {
                email
            }
        })
        //valida si el usuario existe
        if(user.length == 0) return res.status(404).json({message: "Usuario no existe"})
        const validate = await bcrypt.compare(password, user[0].password)
        //valida si la password es correcta
        if(!validate) return res.status(404).json({message: "PASSWORD INCORRECT"})
        //info token
        const tokenInfo = {
            id: user[0].id
        }
        //sign token
        const token = jwt.sign(tokenInfo,process.env.SECRE_KEY as string,{
            expiresIn: process.env.EXPIRE_TOKEN
        })
        //response
        return res.status(200).json({token: token})
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}