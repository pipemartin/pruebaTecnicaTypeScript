import { Request, Response } from "express"
import Vehicle from "../../models/vehicles/vehicles"

export const getAllVehicles = async(_req: Request ,res: Response) =>{
    try {
        const vehicles = await Vehicle.findAll()
        if(vehicles.length ===0) return res.status(404).json({message: "NO hay vehiculos digitalizados"})
        return res.status(200).json(vehicles)
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}