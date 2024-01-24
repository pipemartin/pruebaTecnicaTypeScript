import { NextFunction, Request, Response } from "express";
import Jwt  from "jsonwebtoken"

// Extiende el tipo de Request para incluir la propiedad 'user'
declare global {
  namespace Express {
    interface Request {
      user?: { /* Tipo de la información del usuario */ };
    }
  }
}

export const authJwt = async (req: Request,res: Response, next: NextFunction) =>{
    try {
        const authorization: string = req.headers?.authorization ?? '';
        if(authorization ==='') res.status(404).json({message: "se necesita token"})
        let tokenInfo;
        try {
            tokenInfo = Jwt.verify(authorization, process.env.SECRE_KEY as string)
            req.user = tokenInfo
            return next()
        } catch (error: any) {
            return res.status(500).json({message: error.message})
        }
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}